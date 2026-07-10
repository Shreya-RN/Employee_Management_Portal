import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeById ,updateEmployee} from "../services/employeeService";
import { useNavigate } from "react-router-dom";

function EditEmployee(){
    const navigate = useNavigate();
    useEffect(()=>{
        fetchEmployee();
    },[]);
    const { employeeId } = useParams();
    const [formData, setFormData] = useState({
        employee_id: "",
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        department: "",
        designation: "",
        joining_date: "",
        salary: "",
        status: "active"
    });
    const fetchEmployee=async()=>{
        try{
            const data=await getEmployeeById(employeeId);
            setFormData({...data,joining_date:data.joining_date ? data.joining_date.split("T")[0] : ""});
        }catch(err){
            console.error("Error fetching employee:", err);
        }
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await updateEmployee(employeeId,formData);
            navigate("/employees");
        }catch(err){
            console.error("Error updating employee:", err);
        }
    };
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    return(
        <>
            <Navbar />
            <div className="add-employee-container">
            <h1>Edit Employee</h1>
            <div className="employee-form-card">
                <h2>Edit Employee Information</h2>
                <form className="employee-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Employee ID:</label>
                        <input type="text" name="employee_id" value={formData.employee_id} disabled />
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
                        <input type="email" name="email" value={formData.email} disabled />
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
                        <input type="date" name="joining_date" value={formData.joining_date} disabled />
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
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default EditEmployee;