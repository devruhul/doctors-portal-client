import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AppointmentsDetails = ({ date }) => {
    const { portalUser } = useAuth();
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/appointments?email=${portalUser.email}&date=${date}`)
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date]);
    return (
        <Box>
            <Typography variant='h5'>{portalUser?.displayName}</Typography>
            <Typography variant='h5'>Appointments {appointments.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="appointment data table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Service</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {appointment.patientName}
                                </TableCell>
                                <TableCell align="center">{appointment.time}</TableCell>
                                <TableCell align="center">{appointment.serviceName}</TableCell>
                                <TableCell align="right">
                                    <Button variant='contained'>
                                        <Typography variant='button'>Cancel</Typography>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default AppointmentsDetails;