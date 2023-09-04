import React from 'react';
import RedirectCard from '../components/RedirectCard';
import projects from '../data/projectsData';
import ToTheTopButton from '../components/ToTheTopButton';
import { Box, Typography } from '@mui/material';

const Projects = () => {
    return (
        <Box className="projects">
            <Typography className='withMargin'>
                This page showcases some of my past projects and experience in backend development. Recently, I have also started exploring front-end development. On this page, you'll find a gallery of project thumbnails that you can click on to view more details and images. You can also view the source code by clicking on the github logo. If you have any questions or want to collaborate, feel free to reach out to me.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                {projects.map((project) => {
                    return (
                        <RedirectCard key={project.id} item={project} type='projects' />
                    );
                })}
            </Box>
            <ToTheTopButton />
        </Box>
    )
}
export default Projects