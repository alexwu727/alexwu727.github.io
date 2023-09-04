import React from 'react';
import selfie from '../images/selfie.jpg'
import mistTrail from '../images/mistTrail.jpg'
import softwareDevelopment from '../images/softwareDevelopment.jpg'
import Markdown from '../components/Markdown.jsx';
import ToTheTopButton from '../components/ToTheTopButton';
import { Box, Typography } from '@mui/material';

const AboutMe = () => {
    return (
        <Box>
            <Typography variant='h1' className='pageTitle'>
                About me
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '100px',
                }}
            >
                <Markdown filePath={'aboutMe_1.md'} />
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
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '100px',
                }}
            >
                <Box
                    component='img'
                    src={softwareDevelopment}
                    sx={{
                        width: '32vw',
                        height: '24vw',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        marginRight: '5%',
                    }}
                />
                <Markdown filePath={'aboutMe_2.md'} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '100px',
                }}
            >
                <Markdown filePath={'aboutMe_3.md'} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Markdown filePath={'aboutMe_4.md'} />
                <Box
                    component='img'
                    src={mistTrail}
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