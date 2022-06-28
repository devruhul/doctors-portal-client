import React from 'react';
import { Grid, Box, Button, Typography, Container } from '@mui/material';
import featureImg from '../../../images/treatment.png'
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        // Here is a feature page
        <Container sx={{}}>
            <Grid container sx={{ mt: 5 }} spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, height: 'auto', marginTop: '110px' }}
                        src={featureImg}
                        alt=""
                    />
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: 'left', p: 5 }} item xs={12} md={6}>
                    <Box >
                        <Typography sx={{ mt: 12 }} variant="h3" component="div">
                            Exception Dental <br /> Care, on Your Terms
                        </Typography>
                        <Typography sx={{ mt: 5, pb: 10 }} variant="body1" >
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/services">
                            <Button sx={{ backgroundColor: '#5CE7ED', color: 'black', mb: 4, letterSpacing: '2px' }} variant="contained">Learn More</Button>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Feature;