import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const Review = ({ name, city, description, image }) => {
    return (
        <Container>
            <Grid container justifyContent="space-between" alignItems="center" spacing={1} sx={{ mt: 5 }}>
                <Card sx={{ p: 2, mb: 10, maxWidth: 345 }}>
                    <CardContent>
                        <Typography sx={{ textAlign: 'justify' }} gutterBottom variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>

                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} md={5}>
                            <img style={{ width: '70px' }} src={image} alt="" />
                        </Grid>
                        <Grid item xs={12} md={7} >
                            <CardContent sx={{ textAlign: 'left' }}>
                                <Typography variant="body1" sx={{ color: '#5CE7ED' }}>
                                    {name}
                                </Typography>
                                <Typography variant="body1">
                                    {city}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid >
        </Container >
    );
};

export default Review;