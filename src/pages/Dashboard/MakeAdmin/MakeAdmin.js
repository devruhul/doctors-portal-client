import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { authToken } = useAuth()
    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('http://localhost:5000/users/makeAdmin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('admin added successfully')
                    e.target.reset();
                } else {
                    alert('admin existed')
                    e.target.reset();
                }
            })
    }

    return (
        <Box>
            <Typography variant="h4">Make an admin</Typography> <br />
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    id="standard-basic"
                    onBlur={handleOnBlur}
                    label="Email"
                    name="email"
                    variant="standard" /> <br /> <br />
                <Button variant="contained" color="primary" type="submit">
                    Make Admin
                </Button>
            </form>

        </Box>
    );
};

export default MakeAdmin;