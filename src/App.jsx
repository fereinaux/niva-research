import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
