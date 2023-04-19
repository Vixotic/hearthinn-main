import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const openLogin = () => window.open("http://localhost:3000/login")
  const openRegister = () => window.open("http://localhost:3000/register")
  
  

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HearthInn</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton" onClick={() => openRegister()}>Register</button>
            <button className="navButton" onClick={() => openLogin()}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
