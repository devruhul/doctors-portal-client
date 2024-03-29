import React from 'react';
import { Container, Grid } from '@mui/material';
import AppointsCalendar from '../../../Shared/AppointsCalendar/AppointsCalendar';
import chair from '../../../../images/chair.png';

const AppointHeader = ({ date, setDate }) => {
    return (
        // Here is the appointment header with banner
        <Container sx={{ mt: 14 }}>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6}>
                    <AppointsCalendar date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "500px" }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointHeader;