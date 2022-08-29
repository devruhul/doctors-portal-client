import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Doctor from './Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://doctors-portal-backend.vercel.app/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Grid container spacing={2} sx={{ mb: 10 }}>
            <Container>
                <Typography sx={{ color: '#5CE7ED', m: 10, letterSpacing: '10px', fontWeight: 'bold', }} variant="h6" component="div"> OUR DOCTORS</Typography>

                <Grid container spacing={2}>
                    {

                        doctors.map(doctor =>
                            <Doctor
                                key={doctor._id}
                                doctor={doctor}
                            ></Doctor>
                        )}
                </Grid>
            </Container>
        </Grid>

    );
};

export default Doctors;