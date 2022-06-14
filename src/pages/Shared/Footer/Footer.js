import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import footerbg from '../../../images/footer-bg.png'

const footerBg = {
    backgroundImage: `url(${footerbg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const Footer = () => {
    return (
        //    create a footer with material ui
        <Box style={footerBg} sx={{ mt: 10, mb: 10, p: 10 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={5}>
                <Grid container direction="column"
                    justifyContent="space-between"
                    alignItems="center" item sx={{ mt: 4 }} xs={12} md={3} sm={6}>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Emergency Dental Care
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Check Up
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Treatment of Personal Diseases
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Tooth Extraction
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Cleaning Teeth
                    </Typography>
                </Grid>
                <Grid container direction="column"
                    justifyContent="space-between"
                    alignItems="center" item xs={12} md={3} sm={6}>
                    <Typography variant="h6" >
                        Services
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Emergency Dental Care
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Check Up
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Treatment of Personal Diseases
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Tooth Extraction
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Cleaning Teeth
                    </Typography>
                </Grid>
                <Grid container direction="column"
                    justifyContent="space-between"
                    alignItems="center" item xs={12} md={3} sm={6}>
                    <Typography variant="h6" >
                        Oral Health
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Emergency Dental Care
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Check Up
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Treatment of Personal Diseases
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Tooth Extraction
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        Cleaning Teeth
                    </Typography>
                </Grid>
                <Grid container direction="column"
                    justifyContent="space-between"
                    alignItems="center" item xs={12} md={3} sm={6}>
                    <Typography sx={{ color: '#5CE7ED' }} variant="h6" >
                        Our Address
                    </Typography>
                    <Typography variant="caption" >
                        Birmingham - UK, B15 2JX
                    </Typography>
                    {/* facebook google twitter icon */}
                    <Box sx={{ mt: 1, my: 3 }}>
                        <i className="fa-brands fa-facebook-f fa-2x"></i>
                        <i className="fa-brands fa-google fa-2x"></i>
                        <i className="fa-brands fa-twitter fa-2x"></i>
                    </Box>
                    <Typography variant="body2" >
                        Call Now
                    </Typography>
                    <Button variant='contained'>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="tel:+8801764896656">01764896656</a>
                    </Button>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Footer;