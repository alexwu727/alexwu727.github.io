import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';


const ProjectsLayout = () => {
    return (
        <div>
            <Link to={"/projects"} className='title'>Projects</Link>
            <div className="projectsContainer">
                <Sidebar type={"projects"} />
                <Outlet />
            </div>
        </div>
    )
}
export default ProjectsLayout