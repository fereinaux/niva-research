import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ValuesSection from './components/ValuesSection';
import CareerSection from './components/CareerSection';
import RecommendationsSection from './components/RecommendationsSection';
import CallToActionSection from './components/CallToActionSection';
import AboutNiva from './pages/AboutNiva';
import Products from './pages/Products';

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

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20"> {/* Add padding-top to account for fixed header */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<AboutNiva />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl font-bold text-slate-800">Página de Contato - Em breve!</h1></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
