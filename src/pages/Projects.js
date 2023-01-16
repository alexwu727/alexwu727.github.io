import React, { Component } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../projectsData';

const Projects = () => {
    return (
        <div className="projects">
            <h1>
                Projects
            </h1>
            <p>
                Some text here.
                🚧🚧 Still working on it. 🚧🚧
            </p>
            <div className='cardsContainer'>
                {projects.map((project) => {
                    return (
                        <ProjectCard item={project} type={"projects"} />
                    );
                })}
            </div>
        </div>
    )
}
export default Projects