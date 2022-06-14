import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';


const Blog = ({ name, description, img, title, time }) => {
    return (
        // Here is the single service component
        <Grid item xs={2} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, p: 5 }}>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item xs={12} md={5}>
                        <img style={{ width: '70px' }} src={img} alt="" />
                    </Grid>
                    <Grid item xs={12} md={7} >
                        <CardContent sx={{ textAlign: 'left' }}>
                            <Typography variant="h6" sx={{ color: 'black', fontWeight: 700 }}>
                                {name}
                            </Typography>
                            <Typography variant="body1">
                                {time}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <CardContent sx={{ textAlign: 'left' }}>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Blog;