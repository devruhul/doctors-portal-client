import React, { useState } from 'react';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import loginImg from '../../images/login.png'

const Login = () => {
    const [emailValue, setEmailValue] = useState([])
    const [passwordValue, setPasswordValue] = useState([])

    const handleloginSubmit = e => {
        e.preventDefault();
        alert('Login Successfully')
        e.target.reset();
        console.log(emailValue)
        console.log(passwordValue)

    }
    return (
        <Container>
            <Grid sx={{ p: 5 }} container spacing={24}>
                <Grid item xs={12} md={6} >
                    <Typography sx={{ mt: 14 }} variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleloginSubmit}>
                        <TextField
                            sx={{ width: '1', mt: 3 }}
                            onChange={e => setEmailValue(e.target.value)}
                            required
                            variant="standard"
                            label='Your Email'
                            placeholder="me@example.com"
                            inputProps={{
                                pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.]{1}[a-zA-Z]{2,}$',
                            }}
                        />
                        <TextField
                            sx={{ width: '1', mt: 3 }}
                            onChange={e => setPasswordValue(e.target.value)}
                            required
                            variant="standard"
                            label="Password"
                            type="password"
                            placeholder="Your Password"
                        />

                        <Button sx={{ width: '1', my: 5 }} variant="contained" color="primary" type="submit"  >
                            Submit
                        </Button>

                    </form>
                </Grid>
                <Grid item xs={12} md={6} >
                    <img style={{ width: '100%' }} src={loginImg} alt="login" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Login;