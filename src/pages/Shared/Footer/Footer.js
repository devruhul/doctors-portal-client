import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Footer = () => {
    return (
        //    create a footer with material ui
        <Box sx={{ mt: 10, mb: 10, p: 10, backgroundColor: '#5CE7ED' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={0}>
                <Grid item sx={{ mt: 4, textAlign: 'left' }} xs={12} md={3} sm={6}>
                    <Typopgraphy variant="h6" gutterBottom>
                        Oral Health
                    </Typopgraphy>
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
                <Grid item sx={{ textAlign: 'left' }} xs={12} md={3} sm={6}>
                    <Typopgraphy variant="h6" gutterBottom>
                        Services
                    </Typopgraphy>
                    <Typopgraphy variant="h6" gutterBottom>
                        Oral Health
                    </Typopgraphy>
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
                <Grid item sx={{ textAlign: 'left' }} xs={12} md={3} sm={6}>
                    <Typopgraphy variant="h6" gutterBottom>
                        Oral Health
                    </Typopgraphy>
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
                <Grid item xs={12} md={3} sm={6}>
                    <Typopgraphy sx={{ color: '#5CE7ED' }} variant="h6" gutterBottom>
                        Our Address
                    </Typopgraphy>
                    <Typopgraphy variant="caption" gutterBottom>

                        Birmingham - UK, B15 2JX
                    </Typopgraphy>
                    {/* facebook google twitter icon */}
                    <Box sx={{ mt: 1 }}>
                        <i className="fa-brands fa-facebook-f fa-2x"></i>
                        <i className="fa-brands fa-google fa-2x"></i>
                        <i className="fa-brands fa-twitter fa-2x"></i>
                    </Box>

                    <Typopgraphy variant="body2" gutterBottom>
                        Call Now
                    </Typopgraphy>
                    <Button variant="contained">
                        +8801165146514
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;