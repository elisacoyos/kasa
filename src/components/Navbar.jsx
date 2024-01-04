import React from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav className='navbar'>
        
        <NavLink to="/">
          <div className='navbar__logo'>
            <img src='./src/assets/logo.png' alt="Logo" width="200"/>
          </div>
        </NavLink>

        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>

        <NavLink to="/about">
          <div>A propos</div>
        </NavLink>
    </nav>
  )
}

export default Navbar