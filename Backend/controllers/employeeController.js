const employeeModel = require("../models/employeeModel");

console.log(employeeModel);

const {
    getAllEmployees,
    getDashboardStats,
    searchEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee: softDeleteEmployee,
    getDepartmentStats
} = employeeModel;

const getEmployees=async(req,res)=>{
    try{
        const employees=await getAllEmployees();
        res.status(200).json(employees);
    }catch(error){
        res.status(500).json({message:"server error"});
    }
}

const getStats=async(req,res)=>{
    try{
        const stats=await getDashboardStats();
        res.status(200).json(stats);
    }catch(error){
        res.status(500).json({message:"server error"});
    }
}

const searchEmployee=async(req,res)=>{
    const {search}=req.query;
    try{
        const employee=await searchEmployees(search);
        res.status(200).json(employee);
    }catch(error){
        res.status(500).json({message:"server error"});
    }
}

const viewEmployee=async(req,res)=>{
    const {employeeId}=req.params;
    try{
        const employee=await getEmployeeById(employeeId);
        if(!employee){
            return res.status(404).json({message:"Employee not found"});
        }
        res.status(200).json(employee);
    }catch(error){
        res.status(500).json({message:"server error"});
    }
}

const createEmployee=async(req,res)=>{
    const employee=req.body;
    try{
        const newEmployee=await addEmployee(employee);
        res.status(201).json(newEmployee);
    }catch(error){
        res.status(500).json({message:"server error"});
    }
}

const editEmployee=async(req,res)=>{
    const {employeeId}=req.params;
    const employee=req.body;
    try{
        const updatedEmployee=await updateEmployee(employeeId,employee);
        if(!updatedEmployee){
            return res.status(404).json({message:"Employee not found"});
        }
        res.status(200).json(updatedEmployee);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }
}

const deleteEmployee=async(req,res)=>{
    const {employeeId}=req.params;
    try{
        const deletedEmployee=await softDeleteEmployee(employeeId);
        if(!deletedEmployee){
            return res.status(404).json({message:"Employee not found"});
        }
        res.status(200).json({message:"Employee deactivated successfully",deletedEmployee});
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }
}

const getDeptStats=async(req,res)=>{
    try{
        const stats=await getDepartmentStats();
        res.status(200).json(stats);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"server error"});
    }
}


module.exports={
    getEmployees,
    getStats,
    searchEmployee,
    viewEmployee,
    createEmployee,
    editEmployee,
    deleteEmployee,
    getDeptStats
};