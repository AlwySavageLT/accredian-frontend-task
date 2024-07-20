import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logos from "../Assets/Applogo.png"

function Header() {
  return (
    <AppBar position="static" color="default" elevation={0} className="bg-white">
      <Toolbar className="justify-between container mx-auto">
        <img src={logos} alt="Accredian Logo" className="h-8" />
        <nav>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/refer">Refer</Button>
          <Button color="inherit" component={Link} to="/benefits">Benefits</Button>
          <Button color="inherit" component={Link} to="/about">About Us</Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;