import {useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Dashboard.css'
import Navbar from '../components/Navbar';
import DashboardCard from '../components/DashboardCard';
import {getDashboardStats} from '../services/dashboardServices'
import {getDepartmentStats} from '../services/dashboardServices'
import {ResponsiveContainer,BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid} from 'recharts'

function Dashboard(){
    const [deptStats,setDeptStats]=useState([]);
    const [stats,setStats]=useState({total:0,active:0,inactive:0});
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    useEffect(()=>{
        if(!token){
            navigate("/");
        }
        const fetchStats=async()=>{
            const data=await getDashboardStats();
            setStats(data);
        }
        fetchStats();
        const fetchDeptStats=async()=>{
            const data=await getDepartmentStats();
            const formattedData = data.map(item => ({
                department:
                    item.department === "Software Development"
                        ? "Software Dev."
                    : item.department === "Embedded Systems"
                        ? "Embedded"
                    : item.department === "Technical Support"
                        ? "Tech Support"
                    : item.department,
                total: Number(item.total)
            }));
            setDeptStats(formattedData);
        }
        fetchDeptStats();
    },[]);console.log("Stats:", stats);

    return(
        <div>
            <Navbar />
            <div className="dashboard">
                <DashboardCard title="Total Employees" count={stats.total} />
                <DashboardCard title="Active Employees" count={stats.active} />
                <DashboardCard title="Inactive Employees" count={stats.inactive} />
            
            <div className="chart-card">
                <h2>Employees by Department</h2>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={deptStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="department"
                            interval={0}
                            angle={-35}
                            textAnchor="end"
                            height={90}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar
                            dataKey="total"
                            fill="#2563EB"
                            radius={[8, 8, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            {console.log("Department Stats:", deptStats)}
            <button className="emp-view-btn" onClick={()=>{navigate("/employees")}}>View Employees <span className="arrow">→</span></button>
           </div> 
        </div>
    )
}
export default Dashboard;