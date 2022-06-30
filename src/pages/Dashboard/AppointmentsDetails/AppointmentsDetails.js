import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, Grid } from '@mui/material';

const AppointmentsDetails = ({ date }) => {
    const { portalUser } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`https://doctors-portal-server-2001.herokuapp.com/appointments?email=${portalUser.email}&date=${date.toLocaleDateString()}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [portalUser.email, date]);

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography align="left" variant='h5'>Appointments for {portalUser?.displayName}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <Typography align="right" variant='h5'>{date.toLocaleDateString()}</Typography>
                </Grid>
            </Grid>
            <TableContainer component={Paper}>
                <Table aria-label="appointment data table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Schedule</TableCell>
                            <TableCell align="center">Service</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment?.patientName}
                                </TableCell>
                                <TableCell align="center">{appointment.time}</TableCell>
                                <TableCell align="center">{appointment.serviceName}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AppointmentsDetails;