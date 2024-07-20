import React from 'react';
import { IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logos from "../Assets/Applogo.png"

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logos} alt="Accredian Logo" className="h-8" />
        <div>
          <IconButton><FacebookIcon /></IconButton>
          <IconButton><XIcon/></IconButton>
          <IconButton><LinkedInIcon /></IconButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;