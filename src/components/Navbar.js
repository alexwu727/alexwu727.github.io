import React from 'react';
import SwitchModeButton from './SwitchModeButton';
import { Box } from '@mui/material';
import NavItem from './NavItem';

const Navbar = () => {
    return (
        <Box
            sx={{
                paddingTop: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexGrow: 1
                }}
            >

                <NavItem to="/about">About me</NavItem>
                <NavItem to="/experiences">Experience</NavItem>
                <NavItem to="/projects">Projects</NavItem>
                <NavItem to="/contact">Contact</NavItem>
            </Box>
            <SwitchModeButton />
        </Box>
        // .navbar {
        //     display: flex;
        //     justify-items: center;
        //     justify-content: space-between;
        //     padding-top: 20px;
        //     height: 40px;
        //   }
    )
}
export default Navbar