import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.png'; 

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black',width:"1350px",height:"130px"}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto', marginLeft: '10px' }} />
        </Box>
        <Typography variant="h6" color="inherit">
          My Website
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
