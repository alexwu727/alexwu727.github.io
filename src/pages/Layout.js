import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import "./Layout.css"
const Layout = () => {
    return (
        <div className="Layout">
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Layout