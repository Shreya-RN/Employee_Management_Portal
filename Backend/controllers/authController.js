const bcrypt=require("bcrypt");

const jwt=require("jsonwebtoken");

const {findUserByMail}=require("../models/userModel");

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await findUserByMail(email);
        if(!user){
            return res.status(404).json({message:"user not found!"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message:"invalid email or password!"});
        }
        const token=jwt.sign(
            {
                id:user.id,
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn:"1h"
            }
        );
        res.status(200).json({message:"login successful",token});
    }catch(error){
        res.status(500).json({message:"server error"});
    }
};
module.exports={login};