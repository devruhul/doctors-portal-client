import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import useAuth from '../../../../hooks/useAuth';

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

const BookingForm = ({ bookingModal, handleBookingModalClose, booking, date, setBookingSuccess }) => {
    const { name, time, price } = booking // destructure the booking object and get booking info
    const { portalUser } = useAuth()
    const initialBookingInfo = {
        patientName: portalUser?.displayName,
        email: portalUser?.email,
        phone: ''
    }
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo)

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value

        setBookingInfo({
            ...bookingInfo,
            [field]: value
        })
    }
    // Handle the booking form submit
    const handleBookingForm = e => {

        const appointment = {
            ...bookingInfo,
            time,
            price,
            serviceName: name,
            date: date.toLocaleDateString()
        }
        // send apppointment data server side
        fetch('https://doctors-portal-server.onrender.com/appointments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking Successfully')
                    setBookingSuccess(true)
                    handleBookingModalClose()
                }
            })
        // Stop reloading the page
        e.preventDefault()
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
                    <Typography variant="h6" sx={{ color: 'info.main', fontWeight: 600 }}>{name}</Typography>
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
                            name='patientName'
                            onChange={handleOnBlur}
                            id="outlined-size-small"
                            defaultValue={portalUser?.displayName}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 2 }}
                            label="Email"
                            name='email'
                            onBlur={handleOnBlur}
                            id="outlined-size-small"
                            defaultValue={portalUser?.email}
                            size="small"
                        />
                        <TextField
                            required
                            sx={{ width: '90%', m: 2 }}
                            label="Phone"
                            name='phone'
                            onBlur={handleOnBlur}
                            id="outlined-size-small"
                            placeholder="Your Phone"
                            type="text"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 2 }}
                            label="Date"
                            id="outlined-size-small"
                            defaultValue={date.toLocaleDateString()}
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