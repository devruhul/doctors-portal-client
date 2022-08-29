import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [doctorName, setDoctorName] = useState('');
    const [email, setEmail] = useState('')
    const [doctorImage, setDoctoreImage] = useState(null)

    const handleAddDoctor = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('doctorName', doctorName);
        formData.append('email', email);
        formData.append('doctorImage', doctorImage);
        fetch('http://localhost:5000/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Doctor Added Successfully')
                }
                e.target.reset();
            })
    }

    return (
        <div>
            <h2>Add Doctor</h2>
            <form onSubmit={handleAddDoctor}>
                <TextField
                    onChange={(e) => setDoctorName(e.target.value)}
                    label="Name"
                    name="name"
                    type="text"
                    variant="outlined"
                    required
                />
                <br /> <br />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    label="Email"
                    name="email"
                    type="email"
                    variant="outlined"
                    required
                />
                <br /> <br />
                <input accept="image/*" type="file"
                    onChange={(e) => setDoctoreImage(e.target.files[0])}
                />
                <br /> <br />
                <Button variant="contained" type="submit">
                    Upload
                </Button>

            </form>
        </div >
    );
};

export default AddDoctor;