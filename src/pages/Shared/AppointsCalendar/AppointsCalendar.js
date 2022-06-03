import React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const AppointsCalendar = ({ date, setDate }) => {
    return (
        // Here is the apppointment calendar where user can select the date and it shows the available time slots
        <>
            <Typography variant="h3" sx={{ fontSize: '30px', fontWeight: 700, mb: 3 }}>
                Appointment
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                    }}
                    renderInput={(params) => <TextField
                        {...params} />}
                />
            </LocalizationProvider>
        </>

    );
};

export default AppointsCalendar;