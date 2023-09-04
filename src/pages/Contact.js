import React from 'react';
import contacts from '../data/contactData';
import { Box, Link, List, ListItem, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';

const Contact = () => {
    const theme = useTheme();
    var suffix;
    if (theme.palette.mode === 'dark') {
        suffix = '_white';
    } else {
        suffix = '_black';
    }
    return (
        <Box>
            <Typography variant='h1' className='pageTitle'>
                Contact
            </Typography>
            <Box>
                <Typography>
                    Welcome to my online portfolio page! Here, you can find links to my various online profiles and professional work. You can connect with me on the following platforms:
                </Typography>
                <List

                >
                    {contacts.map((item) => {
                        let icon = require(`../images/icons/${item.icon}${suffix}.png`)
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <img src={icon} width='32px' alt='icon' />
                                </ListItemIcon>
                                <ListItemText>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography width={'20%'}>{`${item.key}: `}</Typography>
                                        {
                                            item.isLink ?
                                                <Link
                                                    href={item.value}
                                                    sx={{
                                                        color: theme.palette.primary.main,
                                                        lineHeight: '100%',
                                                        height: '100%',

                                                    }}
                                                >
                                                    {item.display}
                                                </Link>
                                                :
                                                <Typography className='value'> {item.value} </Typography>
                                        }
                                    </Box>
                                </ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
                {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Icon with text
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo> */}
                {/* <ul>
                    {contacts.map((item) => {
                        let icon = require(`../images/icons/${item.icon}${suffix}.png`)
                        return (
                            <li>
                                <img src={icon} className="icon" />
                                <div className='item'>
                                    <div className='key'>{`${item.key}: `}</div>
                                    {
                                        item.isLink ?
                                            <a className='value' href={item.value}> {item.display} </a> :
                                            <div className='value'> {item.value} </div>
                                    }
                                </div>
                            </li>
                        );
                    })}
                </ul> */}
                <Typography>
                    Feel free to take a look around and view my work. I welcome any questions or feedback you may have.
                </Typography>
            </Box>
        </Box >
    )
}
export default Contact