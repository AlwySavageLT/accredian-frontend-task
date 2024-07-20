import React, { useState } from 'react';
import { Typography, Button, Paper } from '@mui/material';
import ReferButton from './ReferButton';
import ReferralModal from '../ReferralModal';
import './HomePage.css'; 
import learnEarnImage from '../Assets/image.png'; 

function HomePage() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="homepage py-16 bg-gray-50 h-screen overflow-y-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-section flex-1 p-8">
          <Typography variant="h2" className="font-bold mb-4">
            Let's Learn & Earn
          </Typography>
          <Typography variant="h6" className="mb-4">
            Get a chance to win up-to <span className="text-blue-500">Rs. 15,000</span>
          </Typography>
          <ReferButton handleOpen={handleOpen} />
        </div>
        <div className="image-section flex-1 p-8">
          <img src={learnEarnImage} alt="Learn and Earn" className="w-full h-auto" />
        </div>
      </div>
      <ReferralModal open={open} handleClose={handleClose} />
    </section>
  );
}

export default HomePage;
