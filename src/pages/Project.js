import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../projectsData';
import githubLogo from '../github-logo.png'
const Project = () => {
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <div className='date'>{project.date}</div>
            <div className='techContainer'>
                {project.tech && <div>tech: {project.tech}</div>}
                {
                    project.url && <a href={project.url}><img src={githubLogo} id="githubLogo" /></a>
                }
            </div>
            <p>{project.content}</p>
        </div>

    )
}
export default Project