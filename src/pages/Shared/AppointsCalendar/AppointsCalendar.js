import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import isWeekend from 'date-fns/isWeekend';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const AppointsCalendar = () => {
    const [value, setValue] = useState(new Date());
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <>
            </>
                orientation="landscape"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />
            
        </LocalizationProvider>
    );
};

export default AppointsCalendar;