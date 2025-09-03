import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ResumoRapidoServicos from './components/ResumoRapidoServicos';
import BigNumbers from './components/BigNumbers';
import Depoimentos from './components/Depoimentos';
import ChamadaFinal from './components/ChamadaFinal';

function App() {
  return (
    <div className="min-h-screen bg-[#FFF3E1]">
      <Header />
      <main>
        <HeroSection />
        <ResumoRapidoServicos />
        <BigNumbers />
        <Depoimentos />
        <ChamadaFinal />
      </main>
    </div>
  );
}

export default App;
