import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/about" className='navItem'> About me </NavLink>
            <NavLink to="/experiences" className='navItem'> Experience </NavLink>
            <NavLink to="/projects" className='navItem'> Projects </NavLink>
            <NavLink to="/contact" className='navItem'> Contact </NavLink>
        </div>
    )
}
export default Navbar