import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingForm from '../BookingForm/BookingForm';

const Booking = ({ booking, date }) => {
    // State lift for share the date between components
    const { name, time, space } = booking;
    const [bookingModal, setBookingModal] = useState(false);
    const handleBookingModalOpen = () => setBookingModal(true);
    const handleBookingModalClose = () => setBookingModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'info.main', fontWeight: 600 }}>{name}</Typography>
                    <Typography variant="body1" gutterBottom>{time}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>{space} SPACES AVAILABLE</Typography>
                    <Button onClick={handleBookingModalOpen} variant="contained" color="primary">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingForm
                // Send props to the BookingForm component
                date={date}
                booking={booking}
                bookingModal={bookingModal}
                handleBookingModalClose={handleBookingModalClose}
            >
            </BookingForm>
        </>
    );
};

export default Booking;