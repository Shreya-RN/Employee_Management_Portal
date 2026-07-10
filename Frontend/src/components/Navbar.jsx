import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { logout } from '../services/logoutService'

function Navbar(){
    const navigate=useNavigate();
    const handleLogout=()=>{
        logout();
        navigate("/");
    };
    return(
        <nav className="navbar">
            <h2 className="logo">
                Employee Management Portal
            </h2>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
};
export default Navbar;