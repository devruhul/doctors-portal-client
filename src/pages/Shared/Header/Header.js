import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { portalUser, portalUserLogout } = useAuth();

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
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <Button variant="h6" style={{ color: 'white' }}>
                                Home
                            </Button>
                        </Link>
                    </Box>
                    <Link style={{ textDecoration: 'none' }} to="/services">
                        <Button style={{ color: 'white' }}>Services
                        </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/reviews">
                        <Button style={{ color: 'white' }}>Reviews
                        </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/blogs">
                        <Button style={{ color: 'white' }}>Blog
                        </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/contact">
                        <Button style={{ color: 'white' }}>Contact
                        </Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/appointment">
                        <Button sx={{ color: 'white' }}>Appointment
                        </Button>
                    </Link>
                    {
                        portalUser?.email ?
                            <Button onClick={portalUserLogout} sx={{ color: 'white' }}>Logout
                            </Button>
                            :

                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button sx={{ color: 'white' }}>Login
                                </Button>
                            </Link>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;