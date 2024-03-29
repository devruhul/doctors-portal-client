import React from 'react';
import { Container, Box, Grid, Typography} from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

// Fake data for services
const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        img: whitening
    }
]

const Services = () => {
    return (
        // Here is the Services section
        <Box>
            <Container>
                <Typography sx={{ color: '#5CE7ED', mt: 10, letterSpacing: '10px', fontWeight: 'bold', }} variant="h6" component="div"> OUR SERVICES</Typography>
                <Typography sx={{ fontWeight: 'bold', mb: 10 }} variant="h4" component="div">  Services We Provide</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* Map services to create more service */}
                    {
                        services.map(service => <Service
                            key={service.name}
                            {...service} />
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;