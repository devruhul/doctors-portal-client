import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import loginImg from '../../../images/login.png'
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { portalUser, portalUserSignin, loading, authError, signinWithGoogle } = useAuth()

    const location = useLocation()
    // handle login text and password field
    const handleOnChange = e => {
        const emailText = e.target.name
        const passValue = e.target.value

        setLoginData({
            ...loginData,
            [emailText]: passValue
        })
    }
    // handle login submit
    const handleloginSubmit = e => {
        // sign in user with firebase
        portalUserSignin(loginData.email, loginData.password, location)

        e.preventDefault()
        e.target.reset()
    }

    // handle google sign in
    const handleGoogleSignin = () => {
        signinWithGoogle(location)
    }

    return (
        <Container>
            <Grid sx={{ p: 5 }} container spacing={24}>
                <Grid item xs={12} md={6} >
                    <Typography sx={{ mt: 4 }} variant="h4" >
                        Login
                    </Typography>
                    {!loading && <form onSubmit={handleloginSubmit}>
                        <TextField
                            sx={{ width: '1', mt: 3 }}
                            onBlur={handleOnChange}
                            required
                            variant="standard"
                            name="email"
                            label='Your Email'
                            placeholder="me@example.com"
                            inputProps={{
                                pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$',
                            }}
                        />
                        <TextField
                            sx={{ width: '1', mt: 3 }}
                            onBlur={handleOnChange}
                            required
                            variant="standard"
                            name="password"
                            label="Password"
                            type="password"
                            placeholder="Your Password"
                        />

                        <Button sx={{ width: '1', mt: 5 }} variant="contained" color="primary" type="submit"  >
                            Submit
                        </Button>

                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button sx={{ mt: 4 }} variant="text" color="primary" type="submit"  >
                                New User? Register
                            </Button>
                        </NavLink>
                    </form>}
                    {loading && <CircularProgress color="success" />
                    }
                    {portalUser?.email && <Alert severity="success"> Login Successfully </Alert>}
                    <hr />
                    <Button onClick={handleGoogleSignin} variant="contained" >
                        Google Signin
                    </Button>
                    {authError && <Alert severity="error"> {authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={loginImg} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;