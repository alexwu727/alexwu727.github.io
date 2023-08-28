import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';
import Error from './Error';
import githubLogo from '../images/icons/github.png'
import Markdown from '../components/Markdown.jsx';
const Project = () => {
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);
    if (!project) {
        return (<Error msg={`Project id ${projectId} not found.`} />)
    }
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <div className='date'>{project.date}</div>
            <div className='techContainer'>
                {
                    project.tech &&
                    <div className='techSection'>
                        <div> tech </div>
                        {project.tech}
                    </div>
                }
                {
                    project.url && <a href={project.url}><img src={githubLogo} className="icon" /></a>
                }
            </div>
            <Markdown key={project.id} filePath={project.markdown} />

            {project.paragraphs.map((paragraph) => {
                return (
                    <p>{paragraph}</p>
                );
            })}
        </div>

    )
}
export default Project