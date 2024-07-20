// src/components/ReferButton.js

import React from 'react';
import { Button } from '@mui/material';

const ReferButton = ({ handleOpen }) => {
  return (
    <Button 
      variant="contained" 
      color="primary" 
      onClick={handleOpen}
      className="refer-button"
    >
      Refer Now
    </Button>
  );
};

export default ReferButton;
