import React from 'react';
import EducationCard from '../components/EducationCard';
import RedirectCard from '../components/RedirectCard';
import experiences from '../data/experiencesData';
import ToTheTopButton from '../components/ToTheTopButton';
import { Box, Typography } from '@mui/material';

const Experiences = () => {
    const educations = experiences.educations
    const works = experiences.works
    return (
        <Box>
            <Typography className='withMargin'>
                This page contains education and work experience.
            </Typography>
            <Typography className='withMargin'>
                I majored in big data management when I was in college. Our department is like business analysis. We use python to do data analysis and processing and then run machine learning models. I later came to the United States to study computer science at Santa Clara University.
            </Typography>
            <Typography className='withMargin'>
                I also have multiple intern experiences. Most of them focus on backend. I learned how to build a scalable server. For example, when I worked in Aiello, I refactored the server API with Java Vert.x which let us split the entire API instance into multiple instances. This can highly increase the availability and scalability. Also, when I was in Poshmark. I migrated an application server to increase the reliability and completed the logging features for sped up debugging and avoided errors in production.
            </Typography>
            {/* <p>This page contains education and work experience. </p> */}
            {/* <p>I majored in big data management when I was in college. Our department is like business analysis. We use python to do data analysis and processing and then run machine learning models. I later came to the United States to study computer science at Santa Clara University.</p> */}
            {/* <p>I have four intern experiences. Three of them I worked as a software engineer. </p> */}
            {/* <p>I also have multiple intern experiences. Most of them focus on backend. I learned how to build a scalable server. For example, when I worked in Aiello, I refactored the server API with Java Vert.x which let us split the entire API instance into multiple instances. This can highly increase the availability and scalability. Also, when I was in Poshmark. I migrated an application server to increase the reliability and completed the logging features for sped up debugging and avoided errors in production. </p> */}
            {/* <p>Last section record the online cources I have taken and am taking. I am an active learner, I am curious and love to discover new things and technologies. Therefore, in addition to my studies, I also found many online courses to participate in and practice. Among them, game development is worth mentioning. Game development deeply attracts me, and I hope that one day I can develop interesting and attractive games.</p> */}
            <Typography variant='h2'>
                Education
            </Typography>
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
            <Typography variant='h2' color='primary'>
                Work
            </Typography>
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