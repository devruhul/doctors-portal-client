import React from 'react';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <AppointmentBanner/>
        </div>
    );
};

export default Home;