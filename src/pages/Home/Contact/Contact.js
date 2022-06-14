import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import bannerBg from '../../../images/appointment-bg.png';

const bannerbg = {
    backgroundImage: `url(${bannerBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'rgb(0, 41, 102, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    opacity: '0.9',
}

const handleContactForm = (e) => {
    e.preventDefault();
    alert('Form submitted');
    e.target.reset();
}

const Contact = () => {
    return (
        <Container style={bannerbg} sx={{ m: 10, p: 3 }}>
            <Typography sx={{ color: '#5CE7ED', mt: 5, letterSpacing: '10px', fontWeight: 'bold', }} variant="h6"> CONTACT US</Typography>
            <Typography sx={{ fontWeight: 'bold', mb: 5, color: 'white' }} variant="h4">Always Connect With Us</Typography>

            <Box sx={{ textAlign: 'center', p: 5 }}>
                <form onSubmit={handleContactForm}>
                    <TextField
                        sx={{ width: '50%', backgroundColor: 'white', color: 'white' }}
                        required
                        label="Subject"
                        id="outlined-size-normal"
                        placeholder="Subject"
                        size="normal"
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        sx={{ width: '50%', backgroundColor: 'white', color: 'white' }}
                        label="Email"
                        id="outlined-size-normal"
                        placeholder="Email address"
                        size="normal"
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        sx={{ width: '50%',  backgroundColor: 'white' }}
                        id="outlined-textarea"
                        label="Message"
                        placeholder="Your Message"
                        multiline
                        rows={4}
                    />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;