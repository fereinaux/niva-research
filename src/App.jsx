import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Orcamento from './pages/Orcamento';

function AppContent() {
  const location = useLocation();
  const isOrcamentoPage = location.pathname === '/orçamento' || location.pathname.includes('orçamento');

  return (
   
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/orçamento" element={<Orcamento />} />
      </Routes>
   
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
