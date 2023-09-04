import React from 'react';
import { Box, Typography } from '@mui/material';

const EducationCard = ({ item }) => {
    return (
        <Box
            sx={{
                width: '100%',
                marginBottom: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                }}
            >
                <Box>
                    <Typography variant='h3'>{item.name}</Typography>
                    <Typography variant='h4'>{`${item.degree} in ${item.major}`}</Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Typography variant='h5'>{item.date}</Typography>
                    <Typography variant='h5'>{`GPA: ${item.gpa}/4.0`}</Typography>
                </Box>
            </Box>
            <Typography variant='body2'>{item.content} </Typography>
        </Box>
    )
    // .educationCard {
    //     width: 100%;
    //     margin-bottom: 10px;
    //   }

    //   .educationCard p {
    //     margin: auto;
    //   }

    //   .educationCardHeader {
    //     margin-bottom: 10px;
    //     display: flex;
    //     justify-content: space-between;

    //   }
}
export default EducationCard