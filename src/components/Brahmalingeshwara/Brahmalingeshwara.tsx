// src/components/Brahmalingeshwara/Brahmalingeshwara.tsx
import React from 'react';
import { Typography, Card, CardContent, Box } from '@mui/material';
import './Brahmalingeshwara.scss';

const Brahmalingeshwara: React.FC = () => {
  return (
    <Box className="brahmalingeshwara-container" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Brahmalingeshwara</Typography>

      <Card className="history-card" sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5">History</Typography>
          <Typography variant="body1">
            Sri Brahmalingeshwara is the presiding deity of the Kanajar Temple. The history of the temple dates back to ancient times, with rich cultural and spiritual significance. The temple has been a place of worship and pilgrimage for devotees across the region.
          </Typography>
        </CardContent>
      </Card>

      <Card className="doddamane-card" sx={{ boxShadow: 3, marginTop: '20px' }}>
        <CardContent>
          <Typography variant="h5">Doddamane</Typography>
          <Typography variant="body1">
            Doddamane is one of the largest households in the region and plays a key role in the temple's festivals and rituals. The history of Doddamane is intertwined with the growth and legacy of the temple.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Brahmalingeshwara;
