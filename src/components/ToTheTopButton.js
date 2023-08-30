import React, { useEffect } from 'react'
// import icon from '../images/icons/toTheTop.png'

const ToTheTopButton = () => {
    let icon = require('../images/icons/toTheTop.png')
    useEffect(() => {
        const toTheTopButton = document.getElementById('toTheTopButton');
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                toTheTopButton.style.display = "block";
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
        <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} id="toTheTopButton" title="Go to top">
            <img src={icon} id='upArrow' />
        </button>
    )
}

export default ToTheTopButton