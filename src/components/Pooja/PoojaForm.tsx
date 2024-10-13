// src/components/Pooja/PoojaForm.tsx
import React from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import './PoojaForm.scss';

const PoojaForm: React.FC = () => {
  return (
    <Box className="pooja-form-container" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Shashwatha Pooje Registration</Typography>

      <form className="pooja-form">
        <TextField fullWidth label="Name" variant="outlined" sx={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Address" variant="outlined" sx={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Contact Number" variant="outlined" sx={{ marginBottom: '20px' }} />
        <TextField fullWidth label="Pooja Date" type="date" InputLabelProps={{ shrink: true }} variant="outlined" sx={{ marginBottom: '20px' }} />

        <Button variant="contained" color="primary">Submit</Button>
      </form>
    </Box>
  );
};

export default PoojaForm;
