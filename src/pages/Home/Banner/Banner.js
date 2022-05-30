import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import bannerImg from '../../../images/chair.png';
import bannerBg from '../../../images/bg.png';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ContactInfo from '../ContactInfo/ContactInfo';

// Some styles for the banner
const bannerbg = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroudrepeat: 'no-repeat',
    marginTop: 2
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
            <Container style={bannerbg} sx={{ padding: '150px', flexGrow: 1 }}>
                <Grid container spacing={2}>
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
                            <Link to="/appointment">
                                <Button sx={{ backgroundColor: '#5CE7ED', color: 'black', mb: 4, letterSpacing: '5px' }} variant="contained">Get Appointment</Button>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <img style={{ width: '500px' }} src={bannerImg} alt="" />
                    </Grid>
                </Grid>

            </Container>
            <ContactInfo />
        </>
    );
};

export default Banner;