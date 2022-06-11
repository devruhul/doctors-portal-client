import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { portalUser, loading } = useAuth();
    let location = useLocation();

    if (loading) { 
        return <CircularProgress color="success" />
    }
    
    if (portalUser?.email) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }
    } replace />;
};

export default PrivateRoute;