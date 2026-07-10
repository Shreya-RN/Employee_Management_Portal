import axios from "axios";
const API_URL="http://localhost:5000/api";
const getDashboardStats=async ()=>{
    
        const response=await axios.get(`${API_URL}/dashboard`);
        console.log("Service Response:", response.data);
        return response.data;
            
}
const getDepartmentStats=async()=>{
    const response=await axios.get(`${API_URL}/dashboard/departments`);
    return response.data;
}
export {getDashboardStats, getDepartmentStats};