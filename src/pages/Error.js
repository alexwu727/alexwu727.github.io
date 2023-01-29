import React from 'react';


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