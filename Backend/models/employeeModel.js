const pool=require("../config/db")

const getAllEmployees=async()=>{
    const result=await pool.query("select * from employees order by employee_id");
    return result.rows;
}

const getDashboardStats=async()=>{
    const result=await pool.query("select count(*) as total,count(case when status='active' then 1 end) as active, count(case when status='inactive' then 1 end) as inactive from employees");
    return result.rows[0];
    
}

const searchEmployees=async(search)=>{
    const result=await pool.query("select * from employees where (first_name || ' ' || last_name) ilike $1 or email ilike $1 or department ilike $1",[`%${search}%`]);
    return result.rows;
}

const getEmployeeById=async(employee_id)=>{
    const result=await pool.query("select * from employees where employee_id=$1",[employee_id]);
    return result.rows[0];
}

const addEmployee=async(employee)=>{
    const {employee_id,first_name,last_name,email,mobile,department,designation,joining_date,salary,status}=employee;
    const result=await pool.query("insert into employees (employee_id,first_name,last_name,email,mobile,department,designation,joining_date,salary,status) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) returning *",[employee_id,first_name,last_name,email,mobile,department,designation,joining_date,salary,status]);
    return result.rows[0];
}

const updateEmployee=async(employee_id,employee)=>{
    const{first_name,last_name,mobile,department,designation,salary,status}=employee;
    const result=await pool.query("update employees set first_name=$1,last_name=$2,mobile=$3,department=$4,designation=$5,salary=$6,status=$7,updated_at=NOW() where employee_id=$8 returning *",[first_name,last_name,mobile,department,designation,salary,status,employee_id]);
    return result.rows[0];
}

const deleteEmployee=async(employee_id)=>{
    const result=await pool.query("update employees set status='inactive',updated_at=NOW() where employee_id=$1 and status='active' returning *",[employee_id]);
    return result.rows[0];
}

const getDepartmentStats=async()=>{
    const result=await pool.query("select department,count(*) as total from employees group by department order by department");
    return result.rows;
}

console.log("Employee Model Loaded");
console.log(getDepartmentStats);

module.exports={getAllEmployees, getDashboardStats, searchEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee, getDepartmentStats};