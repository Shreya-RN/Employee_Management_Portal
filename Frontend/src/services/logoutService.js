const logout=()=>{
    localStorage.removeItem("token");
};
export{logout};