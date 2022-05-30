import React from 'react';
import { Typography, CardContent, Card, Grid, Container } from '@mui/material';

const ContactInfo = () => {
    return (
        <Container sx={{ mt: 5, mb: 10 }}>
            <Grid sx={{ mt: -25 }} container justifyContent="space-evenly" alignItems="center">
                <Card sx={{ px: 7, py: 1, mb: 10, backgroundColor: 'rgb(69, 183, 203)', color: 'white' }}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <i style={{ marginTop: 5 }} className="fa-regular fa-clock fa-3x"></i>
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: 'white' }}>
                                    Opening Hours
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    7.00 - 8.00
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{ px: 7, py: 1, mb: 10, backgroundColor: 'rgb(0,0,0, 0.8)', color: 'white' }}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <i className="fa-solid fa-location-dot fa-3x"></i>
                        </Grid>
                        <Grid item xs={12} md={8} >
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: 'white' }}>
                                    Visit Our Location
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    Birmingham, UK
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
                <Card sx={{ px: 7, py: 1, mb: 10, backgroundColor: 'rgb(69, 183, 203)', color: 'white' }}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <i class="fa-solid fa-phone fa-3x"></i>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" sx={{ color: 'white' }}>
                                    Contact Us Now
                                </Typography>
                                <Typography gutterBottom variant="body2">
                                    +00 123 456789
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid >
        </Container>

    );
};

export default ContactInfo;