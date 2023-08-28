import React from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';

const Projects = () => {
    return (
        <div className="projects">
            <h1>
                Projects
            </h1>
            <p>
                This page showcases some of my past projects and experience in backend development. Recently, I have also started exploring front-end development. On this page, you'll find a gallery of project thumbnails that you can click on to view more details and images. You can also view the source code by clicking on the github logo. If you have any questions or want to collaborate, feel free to reach out to me.
            </p>
            <div className='cardsContainer'>
                {projects.map((project) => {
                    return (
                        <ProjectCard key={project.id} item={project} type={"projects"} />
                    );
                })}
            </div>
        </div>
    )
}
export default Projects