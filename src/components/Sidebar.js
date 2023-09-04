import React from 'react';
import { NavLink } from "react-router-dom";
import projects from '../data/projectsData';
import experiences from '../data/experiencesData';
import { Box, Typography, useTheme } from '@mui/material';

const Sidebar = ({ type }) => {
    const theme = useTheme()
    const items = type === "projects" ? projects : experiences.works;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '13vw',
            }}
        >
            {items.map((item) => {
                return (
                    <Typography
                        component={NavLink}
                        key={item.id}
                        to={`/${type}/${item.id}`}
                        sx={{
                            width: '13vw',
                            paddingLeft: '10px',
                            boxSizing: 'border-box',
                            lineHeight: '3vw',
                            textAlign: 'left',
                            textDecoration: 'none',
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: 'calc(10px + 0.5vw)',
                            color: theme.palette.inactive.main,
                            '&:hover': {
                                color: theme.palette.primary.main,
                                borderLeft: '3px solid',
                            },
                            '&.active': {
                                color: theme.palette.primary.main,
                                borderLeft: '3px solid',
                                background: theme.palette.primary.sideGradient,
                            },
                        }}
                    >
                        {item.name}
                    </Typography>
                );
            })}
        </Box>
    )
}
export default Sidebar