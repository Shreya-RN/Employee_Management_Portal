import Navbar from "../components/Navbar";
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {createEmployee} from '../services/employeeService'
import './AddEmployee.css'

function AddEmployee(){
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
    employee_id:"",
    first_name:"",
    last_name:"",
    email:"",
    mobile:"",
    department:"",
    designation:"",
    joining_date:"",
    salary:"",
    status:"active"
});
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await createEmployee(formData);
            navigate("/employees");
        }catch(err){
            console.error("Error creating employee:", err);
        }
    };
    return(
        <>
        <Navbar />
        <div className="add-employee-container">
            <h1>Add Employee</h1>
            <div className="employee-form-card">
                <h2>Employee Information</h2>
                <form className="employee-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Employee ID:</label>
                        <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mobile:</label>
                        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Department:</label>
                        <input type="text" name="department" value={formData.department} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Designation:</label>
                        <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Joining Date:</label>
                        <input type="date" name="joining_date" value={formData.joining_date} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Salary:</label>
                        <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <select name="status" value={formData.status} onChange={handleChange}>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="cancel-btn" onClick={() => navigate('/employees')}>
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Add Employee
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default AddEmployee;