import axios from 'axios';

const API_URL="http://localhost:5000/api";

const getEmployees=async ()=>{
    
        const response=await axios.get(`${API_URL}/employees`);
        return response.data;
            
}

const searchEmployees=async(search)=>{
    const response=await axios.get(`${API_URL}/employees/search?search=${search}`);
    return response.data;
}

const getEmployeeById=async(employeeId)=>{
    const response=await axios.get(`${API_URL}/employees/${employeeId}`);
    return response.data;
}

const createEmployee=async(employee)=>{
    const response=await axios.post(`${API_URL}/employees`,employee);
    return response.data;
}


const updateEmployee=async(employeeId,employee)=>{
    const response=await axios.put(`${API_URL}/employees/${employeeId}`,employee);
    return response.data;
}

const deleteEmployee=async(employeeId)=>{
    const response=await axios.put(`${API_URL}/employees/${employeeId}/delete`);
    return response.data;
}

const getDepartmentStats=async()=>{
    const response=await axios.get(`${API_URL}/dashboard/departments`);
    return response.data;
}


export {getEmployees, searchEmployees, getEmployeeById, createEmployee, updateEmployee, deleteEmployee, getDepartmentStats};
