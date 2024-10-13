// src/components/MelbantaDeva/MelbantaDeva.tsx
import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import './MelbantaDeva.scss';

const MelbantaDeva: React.FC = () => {
  return (
    <Box className="melbantadeva-container" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Melbanta Deva</Typography>

      <Card className="rituals-card" sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5">Special Rituals</Typography>
          <Typography variant="body1">
            Melbanta Deva is revered as the protector deity of the temple. Special rituals and offerings are performed in honor of Melbanta Deva, especially during festivals and important temple events.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MelbantaDeva;
