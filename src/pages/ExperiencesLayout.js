import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const ExperiencesLayout = () => {
    return (
        <div>
            <Link to={'/experiences'} className='title'>Experiences</Link>
            <div className="experiencesContainer">
                <Sidebar type={"experiences"} />
                <Outlet />
            </div>
        </div>
    )
}
export default ExperiencesLayout