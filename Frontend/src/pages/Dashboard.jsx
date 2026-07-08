import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Dashboard.css'



function Dashboard(){
    const handleLogout=()=>{
        localStorage.removeItem("token");
        navigate("/");
    }
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    useEffect(()=>{
        if(!token){
            navigate("/");
        }
    },[]);
    return(
        <div>
            <h1>Welcome to Dasboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Dashboard;