import React from 'react';
import Services from '../Services/Services';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import Reviews from '../Reviews/Reviews';
import Blogs from '../Blogs/Blogs';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            {/* All home component */}
            <Banner />
            <Services />
            <Feature />
            <AppointmentBanner />
            <Reviews />
            <Blogs />
            <Doctors />
            <Contact />
        </>
    );
};

export default Home;