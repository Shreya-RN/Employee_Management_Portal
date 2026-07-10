import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import Navbar from "../components/Navbar";
import {getEmployeeById} from '../services/employeeService'
import './EmployeeDetails.css'
import formatDate from '../utils/formatDate'
import { useNavigate } from "react-router-dom";


function EmployeeDetails(){
    const navigate=useNavigate();
    const {employeeId}=useParams();
    const [employee,setEmployee]=useState(null);
    useEffect(()=>{
        const fetchEmployee=async()=>{
            const data=await getEmployeeById(employeeId);
            setEmployee(data);
        }
        fetchEmployee();
    },[employeeId]);
    
    if(!employee){
        return <div>Loading...</div>;
    }

    return(
        <>
            <Navbar />
            <div className="employee-details">
                <h2>Employee Details</h2>
                <div className="details-card">
                    <h3>{employee.first_name} {employee.last_name}</h3>
                    <div className="details-grid">
                    <span className="detail-label">Employee ID:</span> <span className="detail-value">{employee.employee_id}</span>
                    <span className="detail-label">Email:</span> <span className="detail-value">{employee.email}</span>
                    <span className="detail-label">Phone:</span> <span className="detail-value">{employee.mobile}</span>
                    <span className="detail-label">Department:</span> <span className="detail-value">{employee.department}</span>
                    <span className="detail-label">Designation:</span> <span className="detail-value">{employee.designation}</span>
                    <span className="detail-label">Joining Date:</span> <span className="detail-value">{formatDate(employee.joining_date)}</span>
                    <span className="detail-label">Salary:</span> <span className="detail-value">₹{Number(employee.salary).toLocaleString("en-IN")}</span>
                    <span className="detail-label">Status:</span> <span className={`status ${employee.status.toLowerCase()}`}>{employee.status}</span>
                    </div>
                </div>
            </div>
            <button className="back-btn" onClick={()=>navigate("/employees")}>
                ← Back to Employees
            </button>
        </>
    );
}
export default EmployeeDetails;