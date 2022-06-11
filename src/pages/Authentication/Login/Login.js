import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import loginImg from '../../../images/login.png'
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { portalUser, portalUserSignin, loading, authError, setAuthError} = useAuth()

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

    // handle alert message when user login failed alert shows 30secs
    const handleAlertMsg = () => {
        authError && setTimeout(() => {
            setAuthError('')
        }, 3000)
    }
    return (
        <Container>
            <Grid sx={{ p: 5 }} container spacing={24}>
                <Grid item xs={12} md={6} >
                    <Typography sx={{ mt: 10 }} variant="h4" gutterBottom>
                        Login
                    </Typography>
                    {!loading && <form onSubmit={handleloginSubmit}>
                        <TextField
                            sx={{ width: '1', mt: 3 }}
                            onChange={handleOnChange}
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
                            onChange={handleOnChange}
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
                        {loading && <CircularProgress color="success" />
                        }
                        {portalUser?.email && <Alert severity="success"> Login Successfully </Alert>}
                        <Typography onClick={handleAlertMsg} variant='caption'> {authError && <Alert severity="error"> {authError}</Alert>} </Typography>

                    </form>}
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={loginImg} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;