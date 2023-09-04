import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Box, Typography } from '@mui/material';


const ExperiencesLayout = () => {
    return (
        <Box>
            <Typography
                component={Link}
                to={'/experiences'}
                variant='h1'
                className='pageTitle'
            >
                Experience
            </Typography>
            <Box display='flex'>
                <Sidebar type={"experiences"} />
                <Outlet />
            </Box>
        </Box>
    )
}
export default ExperiencesLayout