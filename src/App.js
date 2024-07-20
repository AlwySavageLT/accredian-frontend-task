import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
// import ReferEarn from './components/ReferEarn';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ReferAndEarn from './ReferAndEarn';
import HomePage from './components/HomePage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/refer" element={<HowToRefer />} />
              <Route path="/benefits" element={<ReferralBenefits />} />
              <Route path="/about" element={<AboutUs/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;