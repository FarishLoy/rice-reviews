import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoReviews from './components/VideoReviews';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import './styles/App.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ExploreSection from './components/ExploreSection';
import { Web } from '@mui/icons-material';

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <VideoReviews />
      <MapSection />
      <ExploreSection />
    </>
  );
};

export const WebsiteContext = React.createContext();

function App() {
  const [subscribed, setSubscribed] = React.useState(false);
  return (
    <WebsiteContext.Provider value={{ subscribed, setSubscribed }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </WebsiteContext.Provider>
  );
}

export default App;
