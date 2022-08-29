import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import BookingForm from '../BookingForm/BookingForm';

const Booking = ({ booking, date, setBookingSuccess }) => {
    // State lift for share the date between components
    const { name, time, space, price } = booking;
    const [bookingModal, setBookingModal] = useState(false);
    const handleBookingModalOpen = () => setBookingModal(true);
    const handleBookingModalClose = () => setBookingModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} >
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 600 }}>{name}</Typography>
                    <Typography variant="body1" >{time}</Typography>
                    <Typography variant="caption" display="block" >{space} SPACES AVAILABLE</Typography>
                    <Typography variant="caption" display="block" >Price ${price} </Typography>
                    <Button onClick={handleBookingModalOpen} variant="contained" color="primary">Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingForm
                // Send props to the BookingForm component
                date={date}
                booking={booking}
                bookingModal={bookingModal}
                handleBookingModalClose={handleBookingModalClose}
                setBookingSuccess={setBookingSuccess}
            >
            </BookingForm>
        </>
    );
};

export default Booking;