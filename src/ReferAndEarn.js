import React, { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';
import ReferralModal from './ReferralModal';
import './ReferAndEarn.css';

function ReferAndEarn() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="hero-section">
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" className="hero-title">
          Refer & Earn
        </Typography>
        <Typography variant="body1" className="hero-description">
          Refer a friend and earn rewards when they sign up for a course!
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpen}
          className="refer-button"
        >
          Refer Now
        </Button>
        <ReferralModal open={open} handleClose={handleClose} />
      </Container>
    </div>
  );
}

export default ReferAndEarn;