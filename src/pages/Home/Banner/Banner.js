import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import bannerImg from '../../../images/chair.png';
import bannerBg from '../../../images/bg.png';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const bannerbg = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroudrepeat: 'no-repeat',
    marginTop: 20
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ padding: '70px', flexGrow: 1 }}>
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
                        <Link to="/appointment">
                            <Button sx={{ backgroundColor: '#5CE7ED', color: 'black', mb: 4, letterSpacing: '5px' }} variant="contained">Book An Appointment</Button>
                        </Link>

                    </Box>
                </Grid>
                <Grid item xs={12} md={5} style={verticalCenter}>
                    <img style={{ width: '500px' }} src={bannerImg} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;