import './EmployeeTable.css'
import formatDate from '../utils/formatDate'
import {useNavigate} from 'react-router-dom'
import {deleteEmployee} from '../services/employeeService'

function EmployeeRow({employee}){
    const handleDelete=async()=>{
        const confirmDelete=window.confirm(`Are you sure you want to delete employee ${employee.first_name} ${employee.last_name}?`);
        if(confirmDelete){
            try{
                await deleteEmployee(employee.employee_id);
                navigate("/employees");
            }
            catch(err){
                console.error("Error deleting employee:", err);
            }
        }
    };

    const navigate=useNavigate();
    const handleView=()=>{
        navigate(`/employees/${employee.employee_id}`);
    };
    return(
        <tr>
            <td>{employee.employee_id}</td>
            <td>{employee.first_name} {employee.last_name}</td>
            <td>{employee.email}</td>
            <td>{employee.department}</td>
            <td>{employee.designation}</td>
            <td>{formatDate(employee.joining_date)}</td>
            <td>{employee.status}</td>
            <td>
                <div className="action-buttons">
                    <button className="view-btn" onClick={handleView}>
                        View
                    </button>
                    <button className="edit-btn" onClick={() => navigate(`/employees/edit/${employee.employee_id}`)}>
                        Edit
                    </button>
                    <button className="delete-btn" disabled={employee.status === "inactive"} onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
}
export default EmployeeRow;