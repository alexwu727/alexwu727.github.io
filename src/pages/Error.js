import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h1>
                404
            </h1>
            page not found
            <Link to="/about"> back to about </Link>
        </div>
    )
}
export default Error