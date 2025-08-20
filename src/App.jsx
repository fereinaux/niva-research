import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ValuesSection from './components/ValuesSection';
import CareerSection from './components/CareerSection';
import RecommendationsSection from './components/RecommendationsSection';
import CallToActionSection from './components/CallToActionSection';
import AboutNiva from './pages/AboutNiva';
import Products from './pages/Products';
import Contact from './pages/Contact';
import LandingPagePricing from './pages/LandingPagePricing';

function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <CareerSection />
      <RecommendationsSection />
      <CallToActionSection />
    </div>
  );
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <div className="pt-20"> {/* Add padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutNiva />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/landing-pages" element={<LandingPagePricing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
