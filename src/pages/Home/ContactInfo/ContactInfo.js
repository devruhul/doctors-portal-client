import React from 'react';
import { Typography, CardContent, Card, Grid, Box, Container } from '@mui/material';



const ContactInfo = () => {
    return (
        <Container sx={{ mt: 5, mb:10 }}>
            <Grid container direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={5} sx={{ mt: -25 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ width: 275, backgroundColor: '#45B7CB', px: 5, py: 4, color: 'white' }}>
                        <Box>
                            <i style={{ marginTop: 5 }} className="fa-regular fa-clock fa-2x"></i>
                        </Box>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Opening Hours
                            </Typography>
                            <Typography sx={{ mb: 1 }} color="text.white">
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ width: 275, backgroundColor: 'black', px: 5, py: 4, color: 'white' }}>
                        <Box>
                            <i style={{ marginTop: 5 }} className="fa-solid fa-location-dot fa-2x"></i>
                        </Box>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Visit Our Location
                            </Typography>
                            <Typography sx={{ mb: 1 }} color="text.white">
                                B-1, 1st Floor, SBI Bank
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} >
                    <Card sx={{ width: 275, backgroundColor: '#45B7CB', px: 5, py: 4, color: 'white' }}>
                        <Box>
                            <i style={{ marginTop: 5 }} className="fa-solid fa-phone fa-2x"></i>
                        </Box>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Contact us Now
                            </Typography>
                            <Typography sx={{ mb: 1 }} color="text.white">
                                +880 17896633
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    );
};

export default ContactInfo;