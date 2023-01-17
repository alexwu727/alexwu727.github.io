import React from 'react';
import { Link } from "react-router-dom";
import githubLogo from '../images/github-logo.png'
const WorkCard = ({ item }) => {
    return (
        <Link to={`/experiences/${item.id}`} className="card">
            <h3>{item.display}</h3>
            <div className='date'>{item.date}</div>
            <p>{item.description}</p>
            {item.image && <img src={require(`../${item.image}`)}></img>}
        </Link>
    )
}
export default WorkCard