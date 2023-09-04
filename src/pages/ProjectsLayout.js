import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Box, Typography } from '@mui/material';

const ProjectsLayout = () => {
    return (
        <Box>
            <Typography
                component={Link}
                to={'/projects'}
                variant='h1'
                className='pageTitle'
            >
                Projects
            </Typography>
            <Box display='flex'>
                <Sidebar type={"projects"} />
                <Outlet />
            </Box>
        </Box>
    )
}
export default ProjectsLayout