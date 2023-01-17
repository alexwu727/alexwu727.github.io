import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import experiences from '../data/experiencesData';
import Error from './Error';
import githubLogo from '../images/github-logo.png'
const Experience = () => {
    const { experienceId } = useParams();
    const experience = experiences.works.find((experience) => experience.id === experienceId);
    if (!experience) {
        return (<Error msg={`Experience id ${experienceId} not found.`} />)
    }
    return (
        <div className="experience">
            <h1>{experience.display}</h1>
            <div className='date'>{experience.date}</div>
            <div className='techContainer'>
                {
                    experience.tech &&
                    <div className='techSection'>
                        <div> tech </div>
                        {experience.tech}
                    </div>
                }
                {
                    experience.url && <a href={experience.url}><img src={githubLogo} id="githubLogo" /></a>
                }
            </div>
            <p>{experience.content}</p>
        </div>
    )
}
export default Experience