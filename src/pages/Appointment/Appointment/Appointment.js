
import React, { useState } from 'react';
import Header from '../../Shared/Header/Header';
import AppointsDate from '../AppointsDate/AppointsDate';
import AppointHeader from './AppointHeader/AppointHeader';

const Appointment = () => {
    // state lift for share the date between components
    const [date, setDate] = useState(new Date());
    return (
        <div>
            {/* Appointment components */}
            <Header />
            <AppointHeader date={date} setDate={setDate} />
            <AppointsDate date={date} />
        </div>
    );
};

export default Appointment;