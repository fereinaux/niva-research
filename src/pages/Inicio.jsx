import React from 'react';
import HeroSection from '../components/HeroSection';
import ResumoRapidoServicos from '../components/ResumoRapidoServicos';
import BigNumbers from '../components/BigNumbers';
import Depoimentos from '../components/Depoimentos';
import ChamadaFinal from '../components/ChamadaFinal';

function Inicio() {
  return (
    <main>
      <HeroSection />
      <ResumoRapidoServicos />
      <BigNumbers />
      <Depoimentos />
      <ChamadaFinal />
    </main>
  );
}

export default Inicio;
