import React from 'react';
import { Box, Button, Typography, Container,Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactInfo from '../ContactInfo/ContactInfo';
import bannerImg from '../../../images/chair.png';
import bannerBg from '../../../images/bg.png';

// Some styles for the banner
const bannerbg = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
}

// for centering the content
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        // Here is the banner
        <>
            <Container style={bannerbg} sx={{ flexGrow: 1, }}>
                <Grid container sx={{ pt: 14, pb: 34, mt: -7 }}  spacing={2}>
                    <Grid item sx={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={7}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br />
                                Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{ fontSize: '15px', fontWeight: 300, my: 3 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio voluptas nihil nam molestiae aliquid dolorum fuga obcaecati magnam? Dicta voluptatem expedita alias optio recusandae.
                            </Typography>
                            {/* Send to appointment route through Link component */}
                             <Link style={{ textDecoration: 'none' }} to="/appointment">
                                <Button sx={{ backgroundColor: '#5CE7ED', color: 'black', mb: 4, letterSpacing: '5px' }} variant="contained">Get Appointment</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <img style={{ width: '100%', height: 'auto' }} src={bannerImg} alt="chair" />
                    </Grid>
                </Grid>
            </Container>
            <ContactInfo />
        </>
    );
};

export default Banner;