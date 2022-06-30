import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
    return (
        <Box>
            <Typography variant='h4' sx={{ mt: 5, fontWeight: 'bold' }}>Nothing found please go back to home</Typography>
        </Box>
    );
};

export default NotFound;