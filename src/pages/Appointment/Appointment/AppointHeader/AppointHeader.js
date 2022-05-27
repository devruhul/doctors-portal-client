import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../../../images/chair.png';
import AppointsCalendar from '../../../Shared/AppointsCalendar/AppointsCalendar';

const AppointHeader = ({ date, setDate }) => {
    return (
        <Container sx={{ mt: 14 }}>
            <Grid container spacing={24}>
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