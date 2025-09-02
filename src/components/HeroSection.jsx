import React from 'react';

function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
          <span className="block text-blue-600">Clareza para decidir,</span>
          <span className="block text-indigo-700">comunicar e crescer.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Unimos pesquisa, capacitação e comunicação digital para transformar dados em estratégias que geram impacto.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Solicite uma proposta
          </button>
          <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
