import React from 'react';
import { Typography } from '@mui/material';

const Error = ({ msg = "page not found." }) => {
    return (
        <div className="error">
            <Typography variant='h1'>Error</Typography>
            <Typography variant='h2'>{msg}</Typography>
        </div>
    )
}
export default Error