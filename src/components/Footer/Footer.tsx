// src/components/Footer.tsx
import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Brightness4, Brightness7, Language } from '@mui/icons-material';
import './Footer.scss';

interface FooterProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  language: string;
  changeLanguage: (lng: string) => void;
}

const Footer: React.FC<FooterProps> = ({ darkMode, setDarkMode, language, changeLanguage }) => {
  return (
    <AppBar position="static" className="Footer">
      <Toolbar className="footer-toolbar">
        <div className="footer-actions">
          <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <IconButton color="inherit" onClick={() => changeLanguage(language === 'en' ? 'kn' : 'en')}>
            <Language />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
