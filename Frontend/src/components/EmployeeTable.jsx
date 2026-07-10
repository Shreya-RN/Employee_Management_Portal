import './EmployeeTable.css'
import EmployeeRow from './EmployeeRow';
function EmployeeTable({employees}){
    return(
        <div className="table-container">
        <table className="employee-table">
            <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Joining Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                
                   {employees.length===0?(
                   <tr>
                    <td colSpan="8">No employees found</td>
                    </tr>)
                    :(employees.map((employee)=><EmployeeRow 
                    key={employee.employee_id} 
                    employee={employee}/>))}
                
            </tbody>
        </table>
        </div>
    );
};
export default EmployeeTable;