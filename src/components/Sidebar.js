import React from 'react';
import { NavLink } from "react-router-dom";
import projects from '../data/projectsData';
import experiences from '../data/experiencesData';
const Sidebar = ({ type }) => {
    const items = type === "projects" ? projects : experiences.works;
    return (
        <div className='sidebar'>
            {items.map((item) => {
                return (
                    <NavLink key={item.id} to={`/${type}/${item.id}`} className='sideItem'> {item.name} </NavLink>
                );
            })}
        </div>

    )
}
export default Sidebar