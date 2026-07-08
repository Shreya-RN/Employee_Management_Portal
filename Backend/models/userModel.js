const pool=require("../config/db")

const findUserByMail=async(email)=>{
    try{
        const result=await pool.query("select * from users where email=$1",[email]);
        return result.rows[0];
    }catch(error){
        throw error;
    }
};
module.exports={findUserByMail};