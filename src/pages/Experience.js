import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import experiences from '../experiencesData';
import githubLogo from '../github-logo.png'
const Experience = () => {
    const { experienceId } = useParams();
    const experience = experiences.find((experience) => experience.id === experienceId);
    return (
        <div className="experience">
            <h1>{experience.name}</h1>
            <div className='date'>{experience.date}</div>
            <div className='techContainer'>
                {experience.tech && <div>tech: {experience.tech}</div>}
                {
                    experience.url && <a href={experience.url}><img src={githubLogo} id="githubLogo" /></a>
                }
            </div>
            <p>{experience.content}</p>
        </div>
    )
}
export default Experience