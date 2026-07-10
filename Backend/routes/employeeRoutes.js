const express=require("express");
const {
    getEmployees,
    getStats,
    searchEmployee,
    viewEmployee,
    createEmployee,
    editEmployee,
    deleteEmployee,
    getDeptStats
}=require("../controllers/employeeController");
const router=express.Router();

router.get("/employees",getEmployees);
router.get("/dashboard",getStats);
router.get("/dashboard/departments",getDeptStats);
router.get("/employees/search",searchEmployee);
router.get("/employees/:employeeId",viewEmployee);
router.post("/employees",createEmployee);
router.put("/employees/:employeeId",editEmployee);
router.put("/employees/:employeeId/delete",deleteEmployee);

module.exports=router;