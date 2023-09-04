import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, useTheme } from '@mui/material';
const RedirectCard = ({ item, type }) => {
    const theme = useTheme();
    return (
        <Card
            component={Link}
            to={`/${type}/${item.id}`}
            sx={{
                width: "45%",
                marginBottom: "30px",
                textDecoration: "none",
                color: theme.palette.primary.main,
                "&:hover": {
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    transform: "scale(1.01)",
                    transition: "all 0.2s ease-in-out",
                },
            }}
        >
            <CardMedia
                sx={{ height: 250 }}
                image={require(`../${item.image}`)}
            />
            <CardContent>
                <Typography variant='h3'>{item.display}</Typography>
                <Typography className='date'>{item.date}</Typography>
                <Typography variant='body2'>{item.description}</Typography>
            </CardContent>
        </Card>
    )
}
export default RedirectCard