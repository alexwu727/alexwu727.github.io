import React, { Component } from 'react';
import EducationCard from '../components/EducationCard';
import WorkCard from '../components/WorkCard';
import experiences from '../experiencesData';
const Experiences = () => {
    const educations = experiences.educations
    const works = experiences.works
    // const educations = experiences.filter(experience => experience.type === "education")
    // const works = experiences.filter(experience => experience.type === "work")
    return (
        <div className="experiences">
            <h1>Experiences</h1>
            <p>This page contains education and work experiences. As I mentioned in About me, I graduated from Santa Clara University.
            </p>
            <p>I also have multiple intern experiences. Most of them focus on backend. I learned how to build a scalable server. For example, when I worked in Aiello, I refactored the server API with Java Vert.x which let us split the entire API instance into multiple instances. This can highly increase the availiblity and scalibility.</p>
            <p>Last section record the online cources I have taken and am taking. I am an active learner, I am curious and love to discover new things and technologies. Therefore, in addition to my studies, I also found many online courses to participate in and practice. Among them, game development is worth mentioning. Game development deeply attracts me, and I hope that one day I can develop interesting and attractive games.</p>
            <h2>Education</h2>
            <h2>Work</h2>
            <p>
                Some text here.
                🚧🚧 Still working on it. 🚧🚧
            </p>
            <div className='cardsContainer'>
                {educations.map((education) => {
                    return (
                        <EducationCard item={education} type={"experiences"} />
                    );
                })}
            </div>
            <div className='cardsContainer'>
                {works.map((work) => {
                    return (
                        <WorkCard item={work} type={"experiences"} />
                    );
                })}
            </div>
        </div>
    )
}
export default Experiences