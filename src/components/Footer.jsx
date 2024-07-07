// Footer.jsx
import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px 0', marginTop: '50px' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          Footer content &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
