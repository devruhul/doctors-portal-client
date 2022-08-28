import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentDetails = () => {
    const { paymentId } = useParams()
    return (
        <div>
            <h2>Payment for: {paymentId}</h2>
        </div>
    );
};

export default PaymentDetails;