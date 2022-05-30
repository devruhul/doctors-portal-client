import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';

// modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const BookingForm = ({ bookingModal, handleBookingModalClose, booking, date }) => {
    const { name, time } = booking // destructure the booking object and get booking info

    // Handle the booking form submit
    const handleBookingForm = e => {
        // Stop reloading the page
        e.preventDefault();
        alert(`Booking ${name} on ${date.toDateString()} at ${time}`);
        handleBookingModalClose();
    }

    return (
        <Box>
            {/* Here is the booking modal */}
            <Modal
                open={bookingModal}
                onClose={handleBookingModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" gutterBottom sx={{ color: 'info.main', fontWeight: 600 }}>{name}</Typography>
                    {/* Booking modal form */}
                    <form onSubmit={handleBookingForm}>
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            label="Time"
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 2 }}
                            label="Name"
                            id="outlined-size-small"
                            placeholder="Your Name"
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 2 }}
                            label="Email"
                            id="outlined-size-small"
                            placeholder="Your Email"
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 2 }}
                            label="Phone"
                            id="outlined-size-small"
                            placeholder="Your Phone"
                            size="small"
                            type="number"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            label="Date"
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type="submit" variant="contained" color="primary">Send</Button>
                    </form>
                </Box>
            </Modal>
        </Box>

    );
};

export default BookingForm;