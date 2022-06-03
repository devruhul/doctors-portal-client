import React from 'react';
import doctor from '../../../images/doctor-small.png';

const doctors = [
    {
        name: 'Dr. John',
        phone: '📞 +8801785582069',
        img: doctor
    },
    {
        name: 'Dr. David',
        phone: '📞 +8801785582069',
        img: doctor
    },
    {
        name: 'Dr. Michael',
        phone: '📞 +8801785582069',
        img: doctor
    }
]


const Doctors = () => {
    return (
        <div>
            <h2>Our Doctors</h2>
        </div>
    );
};

export default Doctors;