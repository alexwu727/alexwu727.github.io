import React from 'react'
import { NavLink } from "react-router-dom";
import { Typography, useTheme } from '@mui/material'

const NavItem = ({ to, children }) => {
    const theme = useTheme()
    return (
        <Typography
            component={NavLink}
            to={to}
            sx={{
                textAlign: 'left',
                lineHeight: '40px',
                height: '40px',
                width: '15%',
                textDecoration: 'none',
                fontFamily: 'Roboto, sans-serif',
                fontSize: 'calc(10px + 0.5vw)',
                color: theme.palette.inactive.main,
                '&:hover': {
                    fontWeight: 'bold',
                    color: theme.palette.secondary.main,
                },
                '&.active': {
                    fontWeight: 'bold',
                    color: theme.palette.secondary.main,
                    borderBottom: '3px solid',
                },
            }}
        >
            {children}
        </Typography>
    )
}

export default NavItem