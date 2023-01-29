import React from 'react';
import { useParams } from 'react-router-dom';
import experiences from '../data/experiencesData';
import projects from '../data/projectsData';
import Error from './Error';
import githubLogo from '../images/icons/github.png'
import { Link } from 'react-router-dom';

const Experience = () => {
    const { experienceId } = useParams();
    const experience = experiences.works.find((experience) => experience.id === experienceId);
    if (!experience) {
        return (<Error msg={`Experience id ${experienceId} not found.`} />)
    }
    const renderRelatedProjects = () => {
        if (experience.projects)
            return (
                <div>
                    <h2>Relate Projects</h2>
                    <div className='relatedProjects'>
                        {experience.projects.map((projectId) => {
                            const project = projects.find((project) => project.id === projectId);
                            return (
                                <Link to={`/projects/${projectId}`} className='relatedProject'>{project.name}</Link>
                            );
                        })}
                    </div>
                </div>
            )
        return null;
    }

    return (
        <div className="experience">
            <h1>{experience.display}</h1>
            <div className='date'>{experience.date}</div>
            <div className='techContainer'>
                <div className='techSection'>
                    <div> tech </div>
                    {experience.tech}
                </div>
                {
                    experience.url && <a href={experience.url}><img src={githubLogo} className="icon" /></a>
                }
            </div>
            {experience.paragraphs.map((paragraph) => {
                return (
                    <p>{paragraph}</p>
                );
            })}
            {renderRelatedProjects()}
        </div>
    )
}
export default Experience