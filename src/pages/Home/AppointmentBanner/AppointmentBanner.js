import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import appointment from '../../../images/appointment-bg.png';

const appointmentBg = {
    backgroundImage: `url(${appointment})`,
    backgroundColor: 'rgb(0, 41, 102, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 140
}

const AppointmentBanner = () => {
    return (
        // Here is a appointment banner page
        <Box style={appointmentBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '70%', height: '135%', marginTop: '-125px' }}
                        src={doctor}
                        alt=""
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: "flex-start", alignItems: 'flex-start', textAlign: 'left', }} >
                    <Box sx={{ py: 3, mx: 3 }}>
                        <Typography sx={{ color: '#5CE7ED', mb: 3 }} variant="h4" gutterBottom>
                            Appointment
                        </Typography>
                        <Typography sx={{ color: 'white' }} variant="h4" gutterBottom>
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ color: 'white', fontSize: '15px', my: 4 }} variant="h6" gutterBottom>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, pariatur perferendis doloremque omnis reprehenderit doloribus quas eos quasi. Quasi magni nobis vitae quibusdam illum nostrum?
                        </Typography>
                         <Link style={{ textDecoration: 'none' }} to="/appointment">
                            <Button sx={{ backgroundColor: '#5CE7ED', color: 'black', mb: 4, letterSpacing: '2px' }} variant="contained">Get Appointment</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;