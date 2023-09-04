import React, { useEffect } from 'react'
import { ExpandLessSharp } from '@mui/icons-material'
import { IconButton, useTheme } from "@mui/material";

const ToTheTopButton = () => {
    const theme = useTheme();
    useEffect(() => {
        const toTheTopButton = document.getElementById('toTheTopButton');
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                toTheTopButton.style.display = "flex";
            } else {
                toTheTopButton.style.display = "none";
            }
        }
    }, [])
    // When hover the button, change the image opacity to 1
    useEffect(() => {
        const toTheTopButton = document.getElementById('toTheTopButton');
        const upArrow = document.getElementById('upArrow');
        toTheTopButton.addEventListener('mouseover', () => {
            upArrow.style.opacity = 1;
        })
        toTheTopButton.addEventListener('mouseout', () => {
            upArrow.style.opacity = 0.5;
        })
    }, [])


    return (
        <IconButton
            onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            sx={{
                display: 'none',
                position: 'fixed',
                bottom: '5%',
                right: '5%',
                width: 'calc(15px + 2vw)',
                height: 'calc(15px + 2vw)',
                zIndex: 100,
                transform: 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
                border: '2px solid',
                borderColor: theme.palette.primary.main,
                opacity: 0.5,
                '&:hover': {
                    transform: 'scale(1.1)',
                    transition: 'transform 0.3s ease-in-out',
                    opacity: 1,
                },

            }}
            id="toTheTopButton"
        >
            <ExpandLessSharp id='upArrow' color='primary' opacity='0.5' />
            {/* <img src={icon} id='upArrow' /> */}
        </IconButton>
    )
}

export default ToTheTopButton