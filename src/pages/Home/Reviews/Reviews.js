import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import Review from './Review/Review';
import firstImg from '../../../images/people-1.png';
import secondImg from '../../../images/people-2.png';
import thirdImg from '../../../images/people-3.png';

const reviews = [
    {
        "id": 1,
        "name": "Winson Herry",
        "city": "Los Angeles, USA",
        "description": " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, pariatur perferendis doloribus quas eos quasi. Quasi magni nobis vitae quibusdam illum nostrum? Lorem ipsum dolor sit amet adipisicing elit.",
        "image": firstImg
    },
    {
        "id": 2,
        "name": "Eveleen",
        "city": "Chicago, Illinois",
        "description": " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, pariatur perferendis doloribus quas eos quasi. Quasi magni nobis vitae quibusdam illum nostrum? Lorem ipsum dolor sit amet adipisicing elit.",
        "image": secondImg
    },
    {
        "id": 3,
        "name": "Winifred",
        "city": "Houston, Texas",
        "description": " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, pariatur perferendis doloribus quas eos quasi. Quasi magni nobis vitae quibusdam illum nostrum? Lorem ipsum dolor sit amet adipisicing elit.",
        "image": thirdImg
    }]

const Reviews = () => {
    return (
        // Testomonial page
        <Container sx={{ mt: 10 }}>
            <Grid container spacing={4}>
                <Grid container item xs={12} md={6} sx={{ textAlign: 'left', }} >
                    <Grid justifyContent="center" alignItems="center" >
                        <Grid item>
                            <Typography variant="h4" sx={{ color: '#5CE7ED', }}>
                                Testimonials
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="h4">
                                What's Our Patient's <br /> Says
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: 'right', }}>
                    <i className="fa-solid fa-quote-left fa-10x" style={{ color: 'lightblue' }}></i>
                </Grid>
            </Grid>

            <Grid container spacing={5}>
                {reviews.map(review => (
                    <Grid key={review.id} item xs={12} md={4} sm={6}>
                        <Review
                            {...review} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Reviews;