// src/components/Gallery/Gallery.tsx
import React from 'react';
import { Typography, Grid, Card, CardMedia, Box } from '@mui/material';
import './Gallery.scss';

const Gallery: React.FC = () => {
  const photos = [
    '/assets/images/photo1.jpg',
    '/assets/images/photo2.jpg',
    '/assets/images/photo3.jpg',
  ];

  const videos = [
    '/assets/videos/video1.mp4',
    '/assets/videos/video2.mp4',
  ];

  return (
    <Box className="gallery-container" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Gallery</Typography>

      <Typography variant="h5" gutterBottom>Photos</Typography>
      <Grid container spacing={3}>
        {photos.map((photo, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="gallery-card" sx={{ boxShadow: 3 }}>
              <CardMedia component="img" image={photo} alt={`Photo ${index + 1}`} />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ marginTop: '40px' }}>Videos</Typography>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="gallery-card" sx={{ boxShadow: 3 }}>
              <CardMedia component="video" src={video} controls />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
