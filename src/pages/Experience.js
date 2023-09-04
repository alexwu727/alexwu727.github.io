import React from 'react';
import { useParams } from 'react-router-dom';
import experiences from '../data/experiencesData';
import projects from '../data/projectsData';
import Error from './Error';
import githubLogo from '../images/icons/github.png'
import { Link } from 'react-router-dom';
import Markdown from '../components/Markdown.jsx';
import { Box, Button, IconButton, Link as MuiLink, Typography, } from '@mui/material';

const Experience = () => {
    const { experienceId } = useParams();
    const experience = experiences.works.find((experience) => experience.id === experienceId);
    if (!experience) {
        return (<Error msg={`Experience id ${experienceId} not found.`} />)
    }
    const renderRelatedProjects = () => {
        if (experience.projects)
            return (
                <Box>
                    <Typography variant='h2'>Relate Projects</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            marginBottom: '50px',
                            gap: '10px',
                        }}
                    >
                        {experience.projects.map((projectId) => {
                            const project = projects.find((project) => project.id === projectId);
                            return (
                                <Button
                                    key={projectId}
                                    component={Link}
                                    to={`/projects/${projectId}`}
                                    variant='outlined'
                                >
                                    {project.name}
                                </Button>
                            );
                        })}
                    </Box>
                </Box>
            )
        return null;
    }

    return (
        <Box>
            <Typography variant='h1'>{experience.display}</Typography>
            <Typography className='date'>{experience.date}</Typography>
            <Box
                sx={{
                    marginTop: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '32px',
                    lineHeight: '32px',
                    marginBottom: '10px',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant='body2' className='techTag'> tech </Typography>
                    <Typography variant='body2'> {experience.tech} </Typography>
                </Box>
                {
                    experience.url &&
                    <IconButton
                        component={MuiLink}
                        href={experience.url}
                        width='32px'
                    >
                        <img src={githubLogo} width='100%' alt='github logo' />
                    </IconButton>
                }
            </Box>
            <Markdown key={experience.id} filePath={experience.markdown} />
            {renderRelatedProjects()}
        </Box>
    )
}
export default Experience