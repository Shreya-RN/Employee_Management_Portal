import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Login.css'
import {login} from '../services/authService'

function Login(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const handleLogin=async(e)=>{
        e.preventDefault();
        setError("");
        if(email===""){
            setError("email is required");
            return;
        }
        if(password===""){
            setError("password is required");
            return;
        }
        try{
            const response=await login(email,password);
            console.log(response);
            localStorage.setItem("token",response.token);
            navigate("/Dashboard")
        }catch(error){
            setError(error.response?.data?.message||"login failed");
            console.log(error);
        }

    };
    return(
        <div className="login-page">
            <div className="left-panel">
            <h1 className="portal-title">Employee Management Portal</h1></div>
            <div className="right-panel">
            
            
            <div className="login-box">
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <label>Email:</label><input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <label>Password:</label><input type="password" name="pwd" onChange={(e)=>setPassword(e.target.value)}/>
                    {error && <p>{error}</p>}
                    <button type="submit">Log-in</button>
                </form></div>
            </div>
        </div>
    );
}
export default Login;