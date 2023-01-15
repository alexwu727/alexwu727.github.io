import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const Project = () => {
    const { projectId } = useParams();

    return (
        <div className="project">
            <h1>
                🚧🚧 Still working on it. 🚧🚧
                {/* This is page for project {projectId}. */}
            </h1>
        </div>
    )
}
export default Project