import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="Layout">
            <Navbar />
            <Outlet />
        </div>
    )
}
export default Layout