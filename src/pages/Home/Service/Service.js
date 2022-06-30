import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Service = ({ name, description, img }) => {
    return (
        // Here is the single service component
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow: 0, border: 0 }}>
                <CardMedia
                    sx={{ width: 'auto', textAlign: 'center', margin: 'auto', height: '80px' }}
                    component="img"
                    image={img}
                    alt={name}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;