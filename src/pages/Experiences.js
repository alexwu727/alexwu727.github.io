import React from 'react';
import EducationCard from '../components/EducationCard';
import WorkCard from '../components/WorkCard';
import experiences from '../data/experiencesData';
import ToTheTopButton from '../components/ToTheTopButton';
const Experiences = () => {
    const educations = experiences.educations
    const works = experiences.works
    return (
        <div className="experiences">
            <h1>Experience</h1>
            <p>This page contains education and work experience. </p>
            <p>I majored in big data management when I was in college. Our department is like business analysis. We use python to do data analysis and processing and then run machine learning models. I later came to the United States to study computer science at Santa Clara University.</p>
            {/* <p>I have four intern experiences. Three of them I worked as a software engineer. </p> */}
            <p>I also have multiple intern experiences. Most of them focus on backend. I learned how to build a scalable server. For example, when I worked in Aiello, I refactored the server API with Java Vert.x which let us split the entire API instance into multiple instances. This can highly increase the availability and scalability. Also, when I was in Poshmark. I migrated an application server to increase the reliability and completed the logging features for sped up debugging and avoided errors in production. </p>
            {/* <p>Last section record the online cources I have taken and am taking. I am an active learner, I am curious and love to discover new things and technologies. Therefore, in addition to my studies, I also found many online courses to participate in and practice. Among them, game development is worth mentioning. Game development deeply attracts me, and I hope that one day I can develop interesting and attractive games.</p> */}
            <h2>Education</h2>
            <div className='cardsContainer'>
                {educations.map((education) => {
                    return (
                        <EducationCard key={education.id} item={education} />
                    );
                })}
            </div>
            <h2>Work</h2>
            <div className='cardsContainer'>
                {works.map((work) => {
                    return (
                        <WorkCard key={work.id} item={work} />
                    );
                })}
            </div>
            <ToTheTopButton />
        </div>
    )
}
export default Experiences