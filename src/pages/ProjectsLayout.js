import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const ProjectsLayout = () => {
    return (
        <div>
            <div className='title'> Projects</div>
            <div className="projectsContainer">
                <Sidebar type={"projects"} />
                <Outlet />
            </div>
        </div>
    )
}
export default ProjectsLayout