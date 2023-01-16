import React from 'react';
import { NavLink, Link } from "react-router-dom";
import projects from '../projectsData';
import experiences from '../experiencesData';
const Sidebar = ({ type }) => {
    const items = type === "projects" ? projects : experiences.works;
    return (
        <div className='sidebar'>
            {items.map((item) => {
                return (
                    <NavLink to={`/${type}/${item.id}`} className='sideItem'> {item.name} </NavLink>
                );
            })}
        </div>

    )
}
export default Sidebar