// src/components/Home/Home.tsx
import React, { useEffect, useState } from 'react';
import { Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { fetchNews } from '../../services/newsService';
import './Home.scss'; // SCSS for Home component
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import centerImage from '../../assets/images/center.webp'; // Central image
import image_1 from '../../assets/images/i1.png'; // First outer image
import image_2 from '../../assets/images/i2.png'; // Second outer image
import image_3 from '../../assets/images/i3.png'; // Third outer image
import image_4 from '../../assets/images/i4.png'; // Fourth outer image

interface NewsItem {
  id: number;
  title: string;
  description: string;
}

const Home: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const { t } = useTranslation(); // Access the translation function

  // Fetch news items from mock service
  useEffect(() => {
    fetchNews().then((data) => setNews(data));
  }, []);

  // State to manage the active image index
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Function to rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % 4); // Cycle through 0 to 3
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Box className="home-container" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom className="fade-in">{t('Welcome')}</Typography>
      
      {/* News Section */}
      <Typography variant="h5" gutterBottom className="fade-in">{t('LatestNews')}</Typography>
      <Grid container spacing={3}>
        {news.map((item) => (
          <Grid item xs={12} md={6} lg={4} key={item.id}>
            <Card className="news-card zoom-in" sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Circular Image Section */}
      <section className="circular-section">
        <img className="center-image" src={centerImage} alt="Center Ganesha" />
        
        {/* Outer Images */}
        {[image_1, image_2, image_3, image_4].map((src, index) => (
          <div
            key={index}
            className={`outer-image-container ${activeImageIndex === index ? 'glow' : ''}`}
            style={{
              // Update positioning to create a circular layout
              transform: `translate(-50%, -50%) rotate(${90 * index + activeImageIndex * 90}deg) translate(100px) rotate(-${90 * index + activeImageIndex * 90}deg)`,
            }}
          >
            <img className="outer-image" src={src} alt={`Outer Ganesha ${index + 1}`} />
          </div>
        ))}
      </section>

      {/* Map Section */}
      <Box sx={{ marginTop: '40px' }}>
        <Typography variant="h5" gutterBottom className="fade-in">Temple Location</Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.573291501634!2d75.44874021495445!3d13.5634304905058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbab5ef536b461f%3A0x8b16e7c9d5705170!2sSri%20Brahmalingeshwara%20Temple%2C%20Kanajar!5e0!3m2!1sen!2sin!4v1634631595173!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: '8px', boxShadow: '3px 3px 10px rgba(0,0,0,0.2)' }}
          loading="lazy"
          title="Temple Map"
        />
      </Box>
    </Box>
  );
};

export default Home;
