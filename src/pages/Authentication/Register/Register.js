import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import loginImg from '../../../images/login.png'
import { NavLink } from 'react-router-dom';
const Register = () => {
    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        // store the value of email and password field
        const emailText = e.target.name
        const passValue = e.target.value

        setLoginData({
            ...loginData,
            [emailText]: passValue
        })

        console.log(loginData)
    }

    const handleloginSubmit = e => {
        // match password
        if (loginData.password !== loginData.matchPassword) {
            alert('Password do not match')
        }
        else {
            alert('Register Successfully')
            e.target.reset();
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
                    <form onSubmit={handleloginSubmit}>
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
                        <TextField
                            sx={{ width: '1', mt: 3 }}
                            onChange={handleOnChange}
                            required
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
                    </form>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={loginImg} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;