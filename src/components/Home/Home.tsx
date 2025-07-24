// src/components/Home.tsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import centerImage from '../../assets/images/Brahmalingeshwara.png'; // Central image
import image_1 from '../../assets/images/Brahmalingeshwara.png'; // First outer image
import image_2 from '../../assets/images/Brahmalingeshwara.png'; // Second outer image
import image_3 from '../../assets/images/Brahmalingeshwara.png'; // Third outer image
import image_4 from '../../assets/images/Brahmalingeshwara.png'; // Fourth outer image
import bg from '../../assets/images/KANAJAR LONG SHOT 2.jpg'; // Fourth outer image
import OctagonalComponent from '../OctagonalCard/OctagonalComponent';
import './Home.scss'; // SCSS for Home component

const Home: React.FC = () => {
  const { t } = useTranslation(); // Access the translation function

  // State to manage the rotation angle and dragging
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovering, setIsHovering] = useState(false); // State to manage hover effect
  const [isDragging, setIsDragging] = useState(false); // State to manage dragging
  const [startX, setStartX] = useState(0); // Initial x position for drag

  // Function to rotate images continuously
  useEffect(() => {
    if (!isHovering && !isDragging) {
      const interval = setInterval(() => {
        setRotationAngle((prevAngle) => prevAngle + 2); // Rotate by 2 degrees every 100ms
      }, 100); // Change angle every 100 milliseconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [isHovering, isDragging]); // Depend on hover and dragging state

  // Handle mouse down event for dragging
  const handleMouseDown = (event: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(event.clientX); // Store the starting x position
  };

  // Handle mouse move event for dragging
  const handleMouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      const deltaX = event.clientX - startX; // Calculate the change in x position
      setRotationAngle((prevAngle) => prevAngle + deltaX * 0.1); // Rotate based on drag distance
      setStartX(event.clientX); // Update the starting x position
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging when mouse is released
  };

  // Function to handle click on menu items
  const handleMenuClick = (menuIndex: number) => {
    alert(`Menu item ${menuIndex + 1} clicked!`);
  };

  return (
    <Box className="home-container" >
      {/* Circular Image Section */}
      <section 
        className="circular-section"
        onMouseEnter={() => setIsHovering(true)} // Stop rotation on hover
        onMouseDown={handleMouseDown} // Start dragging on mouse down
        onMouseMove={handleMouseMove} // Handle dragging
        onMouseUp={handleMouseUp} // Stop dragging on mouse up
        onMouseLeave={() => setIsHovering(false)} // Reset hover state when the mouse leaves
      >
        <img className="center-image glow" src={centerImage} alt="Center Ganesha" />

        {/* Outer Images as Menu Items */}
        {[image_1, image_2, image_3, image_4].map((src, index) => {
          const angle = rotationAngle + 90 * index; // Current rotation angle for the image
          return (
            <div
              key={index}
              className="outer-image-container"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
              }}
              onClick={() => handleMenuClick(index)} // Handle menu click
            >
              <img className="outer-image" src={src} alt={`Outer Menu Item ${index + 1}`} />
            </div>
          );
        })}
      </section>

      {/* Octagon Section 1 */}
      <div className="octagon-section">
        <OctagonalComponent title="News" backgroundColor="#FF5733">
          <h3>Latest Updates</h3>
          <p>Stay updated with the latest news and events happening around you.</p>
        </OctagonalComponent>
        <OctagonalComponent title="About" backgroundColor="#33FF57">
          <h3>About Us</h3>
          <p>Learn more about our mission, vision, and the team behind it.</p>
        </OctagonalComponent>
        <OctagonalComponent title="Maps" backgroundColor="#3357FF">
          <h3>Explore Locations</h3>
          <p>Find your way around with our interactive maps.</p>
        </OctagonalComponent>
      </div>

      {/* Octagon Section 2 */}
      <div className="octagon-section">
        <OctagonalComponent title="Contact Us" backgroundColor="#FF33A5">
          <h3>Get in Touch</h3>
          <p>We would love to hear from you! Reach out to us anytime.</p>
        </OctagonalComponent>
        <OctagonalComponent title="Events" backgroundColor="#FF5733">
          <h3>Upcoming Events</h3>
          <p>Join us for exciting events and activities in your area!</p>
        </OctagonalComponent>
        <OctagonalComponent title="Donate" backgroundColor="#33FF57">
          <h3>Support Us</h3>
          <p>Your contributions help us continue our work. Thank you!</p>
        </OctagonalComponent>
      </div>
    </Box>
    
  );
};

export default Home;
