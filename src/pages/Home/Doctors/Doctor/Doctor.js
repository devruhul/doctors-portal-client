import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Doctor = (props) => {
    const { name, phone, img } = props.doctor
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Box>
                <Paper elevation={0} >
                    <img style={{ width: '100%' }} src={img} alt="" />
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 700 }}>
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="caption" sx={{ color: 'black'}}>
                        <i style={{ color: '#5CE7ED' }} className="fa-solid fa-phone fa-1x"></i>
                        {phone}
                    </Typography>
                </Paper>
            </Box>
        </Grid>
    );
};

export default Doctor;