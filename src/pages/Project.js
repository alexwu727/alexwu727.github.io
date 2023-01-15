import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { projectId } = useParams();
    return (
        <div className="project">
            <h1>
                🚧🚧 Still working on it. 🚧🚧
            </h1>
            <h3>This is page for project {projectId}.</h3>
        </div>
    )
}
export default Project