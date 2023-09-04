import React from 'react';
import selfie from '../images/selfie.jpg'
import Markdown from '../components/Markdown.jsx';
import ToTheTopButton from '../components/ToTheTopButton';
import { Box, Typography } from '@mui/material';

const AboutMe = () => {
    return (
        <Box>
            <Typography variant='h1' className='pageTitle'>
                About me
            </Typography>
            <Box display='flex'>
                <Markdown filePath={'aboutMe.md'} />
                <Box
                    component='img'
                    src={selfie}
                    sx={{
                        width: '24vw',
                        height: '32vw',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        marginLeft: '5%',
                    }}
                />
            </Box>
            <ToTheTopButton />
        </Box>
    )
}
export default AboutMe