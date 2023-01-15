import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const Experience = () => {
    const { experienceId } = useParams();
    return (
        <div className="experience">
            <h1>
                🚧🚧 Still working on it. 🚧🚧
            </h1>
            <h3>This is page for experience {experienceId}.</h3>
        </div>
    )
}
export default Experience