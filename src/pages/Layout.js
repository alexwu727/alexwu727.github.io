import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => {
    return (
        <Box className="Layout">
            <Navbar />
            <Outlet />
        </Box>
    )
}
export default Layout