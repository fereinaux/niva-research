import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ValuesSection from './components/ValuesSection';
import CareerSection from './components/CareerSection';
import RecommendationsSection from './components/RecommendationsSection';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ValuesSection />
      <CareerSection />
      <RecommendationsSection />
    </div>
  );
}

export default App;
