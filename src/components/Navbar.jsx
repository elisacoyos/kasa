import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav className='navbar'>
        
        <NavLink className='navbar__logo' to="/">
            <img src='./src/assets/logo.png' alt="Logo" width="200"/>
        </NavLink>

        <NavLink to="/">
          Accueil
        </NavLink>

        <NavLink to="/about">
          A propos
        </NavLink>
    </nav>
  )
}

export default Navbar