import { NavLink } from "react-router-dom";
import "./Navbar.scss"


function Navbar() {
  return (
    <nav className='navbar'>
        
        <NavLink className='navbar__logo' to="/">
            <img src='../../assets/logo.png' alt="Logo" width="160"/>
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