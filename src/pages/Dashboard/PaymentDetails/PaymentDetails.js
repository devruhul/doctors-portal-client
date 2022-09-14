import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LbhEkE2qPyb4aLsG8XuYzxI0q1WCnVgqsWDPT7UXBlNOEsN328Q1GjKBXEDMq62NzzjDp8tFjJVI3DgibrIvN1s00KecszPMl');

const PaymentDetails = () => {
    const { paymentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://doctors-portal-server.onrender.com/appointments/${paymentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [paymentId]);
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default PaymentDetails;