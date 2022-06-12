import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import loginImg from '../../../images/login.png'
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [createUserData, setCreateUserData] = useState({})
    const { portalUser, createPortalUser, loading, authError } = useAuth();

    const location = useLocation()

    const handleOnBlur = e => {
        // store the value of email and password field
        const emailText = e.target.name
        const passValue = e.target.value

        setCreateUserData({
            ...createUserData,
            [emailText]: passValue
        })
    }

    const handleloginSubmit = e => {
        // create user with firebase
        createPortalUser(createUserData.email, createUserData.password, location)

        // match password
        if (createUserData.password !== createUserData.matchPassword) {
            alert('Password do not match')
            return
        }
        else {
            alert('Register Successfully')
            e.target.reset()
        }

        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{ p: 5 }} container spacing={24}>
                <Grid item xs={12} md={6} >
                    <Typography sx={{ mt: 10 }} variant="h4" gutterBottom>
                        Register
                    </Typography>
                    {!loading && <form onSubmit={handleloginSubmit}>
                        <TextField
                            required
                            sx={{ width: '1', mt: 3 }}
                            onBlur={handleOnBlur}
                            variant="standard"
                            name="name"
                            label='Your Name'
                            placeholder="Karim Benjama"
                        />
                        <TextField
                            required
                            sx={{ width: '1', mt: 3 }}
                            onBlur={handleOnBlur}
                            variant="standard"
                            name="email"
                            label='Your Email'
                            placeholder="me@example.com"
                            inputProps={{
                                pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$',
                            }}
                        />
                        <TextField
                            required
                            sx={{ width: '1', mt: 3 }}
                            onBlur={handleOnBlur}
                            variant="standard"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Your Password"
                        />
                        <TextField
                            required
                            sx={{ width: '1', mt: 3 }}
                            onBlur={handleOnBlur}
                            variant="standard"
                            name="matchPassword"
                            label="Retype Password"
                            type="password"
                            placeholder="Retype Password"
                        />
                        <Button sx={{ width: '1', mt: 5 }} variant="contained" color="primary" type="submit"  >
                            Submit
                        </Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login">
                            <Button sx={{ mt: 4 }} variant="text" color="primary" type="submit"  >
                                Already have an account? Login
                            </Button>
                        </NavLink>
                        {loading && <CircularProgress color="success" />
                        }
                        {portalUser?.email && <Alert severity="success"> User Created Successfully</Alert>}
                        {authError && <Alert severity="error"> {authError}</Alert>}
                    </form>}
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={loginImg} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;