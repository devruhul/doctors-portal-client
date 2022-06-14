import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Blog from './Blog/Blog';
import fluoride from '../../../images/people-1.png';
import cavity from '../../../images/people-2.png';
import whitening from '../../../images/people-3.png';



// Fake data for services
const blogs = [
    {
        name: 'Nazrul Islam',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout....',
        title: 'Check at least a doctor in a year for your teeth',
        time: '03 Jun 2022',
        img: fluoride
    },
    {
        name: 'Dr. Nabila',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout......',
        time: '2 Jun 2022',
        title: 'Two times of brush in a day keep your healthy',
        img: cavity
    },
    {
        name: 'Dr. Sanjida',
        description: 'it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout......',
        time: '22 May 2022',
        title: 'The tooth cancer is taking a challenge',
        img: whitening
    }
]

const Blogs = () => {
    return (
        // Here is the Services section
        <Box sx={{ mb: 10 }}>
            <Container>
                <Typography sx={{ color: '#5CE7ED', mt: 10, letterSpacing: '10px', fontWeight: 'bold', }} variant="h6" component="div"> OUR BLOG</Typography>
                <Typography sx={{ fontWeight: 'bold', mb: 10 }} variant="h4" component="div">From Our Blog News</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* Map blogs to create more blog */}
                    {
                        blogs.map(blog => <Blog
                            key={blog.name}
                            {...blog} />
                        )
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Blogs;