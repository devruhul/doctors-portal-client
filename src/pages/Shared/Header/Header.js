import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        // Here is the navigation bar which is fixed at the top of the page and share the same style between all components
        <Box>
            <AppBar position="static">
                <Toolbar>
                    {/* Humburger icon */}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <Button variant="h6" style={{ color: 'white' }}>
                                Home
                            </Button>
                        </Link>
                    </Box>
                    <Link to="/feature">
                        <Button style={{ color: 'white', }}>Feature
                        </Button>
                    </Link>
                    <Link to="/services">
                        <Button style={{ color: 'white' }}>Services
                        </Button>
                    </Link>
                    <Link to="/reviews">
                        <Button style={{ color: 'white' }}>Reviews
                        </Button>
                    </Link>
                    <Link to="/blogs">
                        <Button style={{ color: 'white' }}>Blog
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button style={{ color: 'white' }}>Contact
                        </Button>
                    </Link>
                    <Link to="/appointment">
                        <Button style={{ color: 'white' }}>Appointment
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button style={{ color: 'white' }}>Login
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;