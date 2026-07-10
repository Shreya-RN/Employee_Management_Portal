import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import {useEffect, useState} from 'react'
import {getEmployees,searchEmployees} from '../services/employeeService'
import {useNavigate} from 'react-router-dom'
import './Employees.css'

function Employees(){
    const [search,setSearch]=useState("");
    const [employees,setEmployees]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchEmployees=async()=>{
                const data=await getEmployees();
                setEmployees(data);
            }
        fetchEmployees();
    },[]);
    const handleSearch=async()=>{
        if(search.trim()===""){
            const data=await getEmployees();
            setEmployees(data);
            return;
        }
        const data=await searchEmployees(search);
        setEmployees(data);
    }
    
    return(
        <>
            <Navbar />
            <div className="employees-container">
                <div className="employees-header">
                <h1>Employees</h1>
                <button className="add-employee-btn" onClick={()=>navigate("/employees/add")}>
                    Add Employee
                </button>
                </div>
                <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
                <EmployeeTable employees={employees} />
            </div>
        </>

    );
}
export default Employees;