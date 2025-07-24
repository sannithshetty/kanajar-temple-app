// src/components/Toolbar.tsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Brightness4, Brightness7, Language } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery
import './Toolbar.scss'; // Import the styles

interface ToolbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
  language: string;
  changeLanguage: (lng: string) => void;
}

const ToolbarComponent: React.FC<ToolbarProps> = ({
  darkMode,
  setDarkMode,
  language,
  changeLanguage,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Brahmalingeshwara', path: '/brahmalingeshwara' },
    { label: 'Melbanta Deva', path: '/melbantadeva' },
    { label: 'Shashwatha Pooje', path: '/pooja' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact Us', path: '/contactus' },
  ];

  const drawerList = (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menuItems.map(({ label, path }) => (
          <ListItemButton
            key={label}
            component={Link}
            to={path}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Check if the screen is small

  return (
    <>
      <AppBar position="static" className="AppBar">
        <Toolbar className="Toolbar">
          {/* Show hamburger menu only on small screens */}
          {isSmallScreen && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}

          {/* Render Menu Buttons for larger screens */}
          {!isSmallScreen && (
            <div className="toolbar-buttons">
              {menuItems.map(({ label, path }) => (
                <Button key={label} color="inherit" component={Link} to={path}>
                  {label}
                </Button>
              ))}
            </div>
          )}

          <div className="toolbar-actions">
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)} className="menu-button">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            <IconButton color="inherit" onClick={() => changeLanguage(language === 'en' ? 'kn' : 'en')}>
              <Language />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div className="drawer-list">{drawerList}</div>
      </Drawer>
    </>
  );
};

export default ToolbarComponent;
