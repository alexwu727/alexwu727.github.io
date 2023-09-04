import React from 'react';
import EducationCard from '../components/EducationCard';
import RedirectCard from '../components/RedirectCard';
import experiences from '../data/experiencesData';
import ToTheTopButton from '../components/ToTheTopButton';
import { Box, Typography, useTheme } from '@mui/material';

const Experiences = () => {
    const theme = useTheme();
    const educations = experiences.educations
    const works = experiences.works
    return (
        <Box>
            <Typography className='withMargin'>
                This page contains education and work experience.
            </Typography>
            <Typography className='withMargin'>
                I pursued a major in Big Data Management during my college years, where the focus of our department was akin to business analysis. We utilized Python for data analysis and processing, and implemented machine learning models to drive insights. Later, I moved to the United States to further my education in Computer Science at Santa Clara University.
            </Typography>
            <Typography className='withMargin'>
                I've gained diverse experience through multiple internships, primarily focusing on backend development. For instance, during my time at Aiello, I restructured the server API using Java Vert.x, which allowed us to divide the entire API into multiple, more manageable instances, thereby significantly enhancing its availability and scalability. Similarly, at Poshmark, I was responsible for migrating an application server to improve its reliability. I also implemented comprehensive logging features, which expedited debugging and minimized errors in the production environment.
            </Typography>
            {/* <p>This page contains education and work experience. </p> */}
            {/* <p>I majored in big data management when I was in college. Our department is like business analysis. We use python to do data analysis and processing and then run machine learning models. I later came to the United States to study computer science at Santa Clara University.</p> */}
            {/* <p>I have four intern experiences. Three of them I worked as a software engineer. </p> */}
            {/* <p>I also have multiple intern experiences. Most of them focus on backend. I learned how to build a scalable server. For example, when I worked in Aiello, I refactored the server API with Java Vert.x which let us split the entire API instance into multiple instances. This can highly increase the availability and scalability. Also, when I was in Poshmark. I migrated an application server to increase the reliability and completed the logging features for sped up debugging and avoided errors in production. </p> */}
            {/* <p>Last section record the online cources I have taken and am taking. I am an active learner, I am curious and love to discover new things and technologies. Therefore, in addition to my studies, I also found many online courses to participate in and practice. Among them, game development is worth mentioning. Game development deeply attracts me, and I hope that one day I can develop interesting and attractive games.</p> */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '20px 0px',
                }}
            >
                <Box
                    sx={{
                        height: '1px',
                        borderBottom: '5px solid',
                        borderImageSlice: 1,
                        borderImageSource: theme.palette.horizontalLine.left,
                        width: '35%',
                    }}
                />
                <Typography variant='h2'>
                    Education
                </Typography>
                <Box
                    sx={{
                        height: '1px',
                        borderBottom: '5px solid',
                        borderImageSlice: 1,
                        borderImageSource: theme.palette.horizontalLine.right,
                        width: '35%',
                    }} s
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                }}
            >
                {educations.map((education) => {
                    return (
                        <EducationCard key={education.id} item={education} />
                    );
                })}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '20px 0px',
                }}
            >
                <Box
                    sx={{
                        height: '1px',
                        borderBottom: '5px solid',
                        borderImageSlice: 1,
                        borderImageSource: theme.palette.horizontalLine.left,
                        width: '35%',
                    }}
                />
                <Typography variant='h2'>
                    Work
                </Typography>
                <Box
                    sx={{
                        height: '1px',
                        borderBottom: '5px solid',
                        borderImageSlice: 1,
                        borderImageSource: theme.palette.horizontalLine.right,
                        width: '35%',
                    }} s
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                {works.map((work) => {
                    return (
                        <RedirectCard key={work.id} item={work} type='experiences' />
                    );
                })}
            </Box>
            <ToTheTopButton />
        </Box>
    )
}
export default Experiences