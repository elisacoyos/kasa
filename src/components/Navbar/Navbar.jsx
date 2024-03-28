import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/logo.png"


function Navbar() {
  return (
    <nav className='navbar'>
        
        <NavLink className='navbar__logo' to="/">
            <img src={logo} alt="Logo" width="160"/>
        </NavLink>

        <NavLink className='navbar__nav' to="/">
          Accueil
        </NavLink>

        <NavLink className='navbar__nav' to="/about">
          A propos
        </NavLink>
    </nav>
  )
}

export default Navbar