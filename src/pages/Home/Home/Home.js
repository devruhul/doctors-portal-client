import React from 'react';
import Header from '../../Shared/Header/Header';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Services />
            <AppointmentBanner/>
        </div>
    );
};

export default Home;