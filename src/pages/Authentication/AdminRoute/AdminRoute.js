import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { portalUser, admin, loading } = useAuth();
    let location = useLocation();

    if (loading) {
        return <CircularProgress color="success" />
    }

    if (portalUser?.email && admin) {
        return children
    }

    return <Navigate to="/login" state={{ from: location }
    } replace />;
};

export default AdminRoute;