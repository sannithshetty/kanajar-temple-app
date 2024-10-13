// src/components/ContactUs/ContactUs.tsx
import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import './ContactUs.scss';

const ContactUs: React.FC = () => {
  return (
    <Box className="contactus-container" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>

      <form className="contactus-form">
        <TextField fullWidth label="Name" variant="outlined" sx={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Email" variant="outlined" sx={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Message" multiline rows={4} variant="outlined" sx={{ marginBottom: '20px' }} />

        <Button variant="contained" color="primary">Send Message</Button>
      </form>
    </Box>
  );
};

export default ContactUs;
