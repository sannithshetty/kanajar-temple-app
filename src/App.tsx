// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './components/Home/Home';
import Brahmalingeshwara from './components/Brahmalingeshwara/Brahmalingeshwara';
import MelbantaDeva from './components/MelbantaDeva/MelbantaDeva';
import PoojaForm from './components/Pooja/PoojaForm';
import Gallery from './components/Gallery/Gallery';
import ContactUs from './components/ContactUs/ContactUs';
import ToolbarComponent from './components/Toolbar/Toolbar';
import Footer from './components/Footer/Footer'; // Import the Footer
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
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <ToolbarComponent
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            changeLanguage={changeLanguage}
          />
          
          <main> {/* Use the styles defined in App.scss */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/brahmalingeshwara" element={<Brahmalingeshwara />} />
              <Route path="/melbantadeva" element={<MelbantaDeva />} />
              <Route path="/pooja" element={<PoojaForm />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </main>
          
          <Footer
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            language={language}
            changeLanguage={changeLanguage}
          />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
