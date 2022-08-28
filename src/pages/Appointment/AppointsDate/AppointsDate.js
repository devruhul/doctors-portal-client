import React, { useState } from 'react';
import { Grid, Container, Typography, Alert } from '@mui/material';
import Booking from '../Appointment/Booking/Booking';

// Fake data for bookings
const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: '$100',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: '$200',
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: '$300',
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: '$400',
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: '$500',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: '$600',
        space: 10,
    },
]

const AppointsDate = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        // Here is the AppointsDate section
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 2 }}>Available Appoinments On {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
            <Grid container spacing={2}>
                {/* Map bookings to create paper and share the information */}
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    />)
                }
            </Grid>
        </Container>
    );
};

export default AppointsDate;