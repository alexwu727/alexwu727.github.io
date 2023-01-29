import React from 'react';
import { Link } from "react-router-dom";
const ProjectCard = ({ item, type }) => {
    return (
        <Link to={`/${type}/${item.id}`} className="card">
            <h2>{item.name}</h2>
            <div className='date'>{item.date}</div>
            <p>{item.description}</p>
            {item.image && <img src={require(`../${item.image}`)}></img>}
        </Link>
    )
}
export default ProjectCard