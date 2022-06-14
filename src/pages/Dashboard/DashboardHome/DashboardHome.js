import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import AppointsCalendar from '../../Shared/AppointsCalendar/AppointsCalendar';
import AppointmentsDetails from '../AppointmentsDetails/AppointmentsDetails';

const DashboardHome = () => {
    const [date, setDate] = useState(new Date());

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={8} md={4}>
                    <AppointsCalendar
                        date={date}
                        setDate={setDate}
                    />
                </Grid>
                <Grid item xs={12} sm={4} md={8}>
                    <AppointmentsDetails date={date} />
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardHome;