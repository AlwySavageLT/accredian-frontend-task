// src/components/AboutUs.js

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" className="mt-10 h-screen">
      <Box
        className="p-8 bg-white rounded-lg shadow-lg overflow-y-auto"
        sx={{ backgroundColor: '#fff', maxHeight: 'calc(100vh - 80px)' }}
      >
        <Typography variant="h4" className="text-center mb-4" sx={{ color: '#333' }}>
          About Us
        </Typography>
        <Typography variant="body1" className="mb-4" sx={{ color: '#555' }}>
          Welcome to our Refer and Earn app! Our mission is to help you earn rewards by referring your friends and family. With our easy-to-use platform, you can track your referrals and see how much you've earned in real-time. Join us today and start earning!
        </Typography>
        <Typography variant="body1" className="mb-4" sx={{ color: '#555' }}>
          Our app is designed with user-friendliness in mind, ensuring that you have the best experience possible. We value your feedback and are constantly working to improve our services. Thank you for being a part of our community!
        </Typography>
        <Typography variant="body1" className="mb-4" sx={{ color: '#555' }}>
          We are committed to providing the best services and ensuring you have a seamless experience using our app. Feel free to reach out to us for any support or queries you may have.
        </Typography>
        <Typography variant="body1" className="mb-4" sx={{ color: '#555' }}>
          Our team is dedicated to constantly improving our platform and adding new features based on your feedback. Stay tuned for updates and new features coming soon!
        </Typography>
        <Box className="text-center mt-6">
          <Button variant="contained" className="bg-blue-500 text-white hover:bg-blue-600" sx={{ padding: '10px 20px' }}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
