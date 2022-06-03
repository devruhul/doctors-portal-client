import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import doctor from '../../../images/doctor-small.png';
import Doctor from './Doctor/Doctor';

const doctors = [
    {
        id: 1,
        name: 'Dr. John',
        phone: ' +8801785582069',
        img: doctor
    },
    {
        id: 2,
        name: 'Dr. David',
        phone: ' +8801764896603',
        img: doctor
    },
    {
        id: 3,
        name: 'Dr. Michael',
        phone: ' +8801765465456',
        img: doctor
    }
]


const Doctors = () => {
    return (
        <Grid container spacing={2} sx={{ mb: 10 }}>
            <Container>
                <Typography sx={{ color: '#5CE7ED', m: 10, letterSpacing: '10px', fontWeight: 'bold', }} gutterBottom variant="h6" component="div"> OUR DOCTORS</Typography>

                <Grid container spacing={2}>
                    {

                        doctors.map(doctor =>
                            <Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>
                        )}
                </Grid>
            </Container>
        </Grid>

    );
};

export default Doctors;