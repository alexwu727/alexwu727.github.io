import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const ExperiencesLayout = () => {
    return (
        <div>
            <div className='title'> Experiences</div>
            <div className="experiencesContainer">
                <Sidebar type={"experiences"} />
                <Outlet />
            </div>
        </div>
    )
}
export default ExperiencesLayout