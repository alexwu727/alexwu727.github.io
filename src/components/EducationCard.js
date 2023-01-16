import React from 'react';
import { Link } from "react-router-dom";
import githubLogo from '../github-logo.png'
const EducationCard = ({ item, type }) => {
    return (
        <Link to={`/${type}/${item.id}`} className="educationCard">
            <h2>{item.name}</h2>
            <div className='date'>{item.date}</div>
            <p>Lorem ipsum dolor sit amet, praesent, consectetur adipiscing elit. Etiam non lectus et ligula aliquet sagittis dignissim vitae purus. </p>
            <img src={githubLogo}></img>
        </Link>
    )
}
export default EducationCard