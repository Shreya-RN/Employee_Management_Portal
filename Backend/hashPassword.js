const bcrypt=require("bcrypt");
async function generateHash(){
    const password="YOUR_PASSWORD";
    const hash=await bcrypt.hash(password,10);
    console.log(hash);
}
generateHash();
