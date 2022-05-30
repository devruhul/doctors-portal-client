import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';

const Home = () => {
    return (
        <div>
            {/* All home component */}
            <Banner />
            <Services />
            <Feature />
            <AppointmentBanner/>
        </div>
    );
};

export default Home;