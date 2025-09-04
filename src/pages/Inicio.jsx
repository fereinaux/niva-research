import React from 'react';
import HeroSection from '../components/HeroSection';
import ResumoRapidoServicos from '../components/ResumoRapidoServicos';
import BigNumbers from '../components/BigNumbers';
import Depoimentos from '../components/Depoimentos';
import ChamadaFinal from '../components/ChamadaFinal';
import Footer from '../components/Footer';

function Inicio() {
  return (
    <main>
      <HeroSection />
      <ResumoRapidoServicos />
      <BigNumbers />
      <Depoimentos />
      <ChamadaFinal />
      <Footer />
    </main>
  );
}

export default Inicio;
