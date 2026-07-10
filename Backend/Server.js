const cors=require("cors");

const authRoutes=require("./routes/AuthRoutes");
const employeeRoutes=require("./routes/employeeRoutes");

const express=require("express");

require("dotenv").config();

const pool=require("./config/db");
const app=express();

pool.connect()
.then(()=>{console.log("database connected successfully");})
.catch((err)=>{
    console.error("database connection failed!");
    console.error(err.message);
});
    
app.use(cors());
app.use(express.json());

app.use("/api",authRoutes);
app.use("/api",employeeRoutes);
const port=process.env.PORT||5000;
app.listen(port,()=>{console.log(`server running on port ${port}`);});