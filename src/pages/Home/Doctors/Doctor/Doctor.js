import React from 'react';
import { Grid, Paper, Box, Typography } from '@mui/material';

const Doctor = (props) => {
    const { doctorName, doctorEmail, doctorImage } = props.doctor
    return (
        <Grid item xs={12} md={4} sm={6}>
            <Box>
                <Paper elevation={0} >
                    <img style={{ width: '200px', height: '200px' }}
                        src={`data:image/png;base64,${doctorImage}`} alt="" />
                    <Typography variant="h6" sx={{ color: 'black', fontWeight: 700 }}>
                        {doctorName}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'black' }}>
                        <i style={{ color: '#5CE7ED', margin: '20px' }} className="fa-solid fa-phone fa-1x"></i>
                        <a style={{ fontSize: '15px' }} href={`mailto:${doctorEmail}`} target="_blank" rel="noreferrer" >{doctorEmail} </a>
                    </Typography>
                </Paper>
            </Box>
        </Grid >
    );
};

export default Doctor;