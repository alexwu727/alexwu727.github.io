import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projectsData';
import Error from './Error';
import githubWhite from '../images/icons/github_white.png'
import githubBlack from '../images/icons/github_black.png'
import Markdown from '../components/Markdown.jsx';
import { Box, IconButton, Link as MuiLink, Typography, useTheme } from '@mui/material';

const Project = () => {
    const theme = useTheme();
    var githubLogo;
    if (theme.palette.mode === 'dark') {
        githubLogo = githubWhite;
    } else {
        githubLogo = githubBlack;
    }
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);
    if (!project) {
        return (<Error msg={`Project id ${projectId} not found.`} />)
    }
    return (
        <Box className="project">
            <Typography variant='h1'>{project.name}</Typography>
            <Typography className='date'>{project.date}</Typography>
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
                    <Typography variant='body2'> {project.tech} </Typography>
                </Box>
                {
                    project.url &&
                    <IconButton
                        component={MuiLink}
                        href={project.url}
                        width='50px'
                        height='50px'
                    >
                        <img src={githubLogo} width='100%' alt='github logo' />
                    </IconButton>
                }
            </Box>
            <Markdown key={project.id} filePath={project.markdown} />

            {project.paragraphs.map((paragraph) => {
                return (
                    <Typography className='withMargin'>{paragraph}</Typography>
                );
            })}
        </Box>

    )
}
export default Project