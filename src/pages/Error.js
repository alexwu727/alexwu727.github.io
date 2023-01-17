import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Error = ({ msg = "page not found." }) => {
    return (
        <div className="error">
            <h1>
                404
            </h1>
            <p>{msg}</p>
        </div>
    )
}
export default Error