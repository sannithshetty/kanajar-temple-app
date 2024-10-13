// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, AppBar, Toolbar, Button, IconButton } from '@mui/material';
import Home from './components/Home/Home';
import Brahmalingeshwara from './components/Brahmalingeshwara/Brahmalingeshwara';
import MelbantaDeva from './components/MelbantaDeva/MelbantaDeva';
import PoojaForm from './components/Pooja/PoojaForm';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';
import { Brightness4, Brightness7, Language } from '@mui/icons-material'; // Import MUI icons
import { useTranslation } from 'react-i18next';
import './App.scss'; // SCSS for global styles

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  // MUI theme configuration
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#ff5722' : '#03a9f4', // Orange for dark mode, Blue for light mode
      },
      secondary: {
        main: '#ff9800',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  // Handle language change
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/brahmalingeshwara">Brahmalingeshwara</Button>
            <Button color="inherit" component={Link} to="/melbantadeva">Melbanta Deva</Button>
            <Button color="inherit" component={Link} to="/pooja">Shashwatha Pooje</Button>
            <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
            <Button color="inherit" component={Link} to="/contactus">Contact Us</Button>

            {/* Theme toggle button */}
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)} sx={{ ml: 'auto' }}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {/* Language toggle button */}
            <IconButton color="inherit" onClick={() => changeLanguage(language === 'en' ? 'kn' : 'en')}>
              <Language />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brahmalingeshwara" element={<Brahmalingeshwara />} />
          <Route path="/melbantadeva" element={<MelbantaDeva />} />
          <Route path="/pooja" element={<PoojaForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
