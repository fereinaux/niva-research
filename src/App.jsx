import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={
              <div>
                <section className="min-h-screen bg-[#F5F5DC] flex items-center justify-center pt-20">
                  <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800 mb-6">Seção 1</h1>
                    <p className="text-xl text-gray-600">Conteúdo da primeira seção</p>
                  </div>
                </section>
                
                <section className="min-h-screen bg-white flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">Seção 2</h2>
                    <p className="text-xl text-gray-600">Conteúdo da segunda seção</p>
                  </div>
                </section>
                
                <section className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">Seção 3</h2>
                    <p className="text-xl text-gray-600">Conteúdo da terceira seção</p>
                  </div>
                </section>
                
                <section className="min-h-screen bg-white flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">Seção 4</h2>
                    <p className="text-xl text-gray-600">Conteúdo da quarta seção</p>
                  </div>
                </section>
                
                <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-5xl font-bold text-gray-800 mb-6">Seção 5</h2>
                    <p className="text-xl text-gray-600">Conteúdo da quinta seção</p>
                  </div>
                </section>
              </div>
            } />
            <Route path="/sobre" element={<div className="p-8 text-center">Página Sobre nós</div>} />
            <Route path="/servicos" element={<div className="p-8 text-center">Página Serviços</div>} />
            <Route path="/portfolio" element={<div className="p-8 text-center">Página Portfólio</div>} />
            <Route path="/blog" element={<div className="p-8 text-center">Página Blog</div>} />
            <Route path="/contato" element={<div className="p-8 text-center">Página Contato</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
