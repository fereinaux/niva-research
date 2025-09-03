import React from 'react';

function BigNumbers() {
  return (
    <section id="big-numbers" className="min-h-screen bg-gradient-to-br from-[#FFF3E1] via-white to-[#FFF3E1] flex items-center justify-center relative overflow-hidden pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6339] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1595FF] rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FF6339] rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6339] to-[#E55A2B] rounded-full shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#282828] animate-fade-in-up animate-delay-200">
          <span className="block">O que nós já</span>
          <span className="block text-[#FF6339]">entregamos</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[#282828]/80 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Números que comprovam nossa <span className="text-[#1595FF] font-semibold">experiência</span> e <span className="text-[#FF6339] font-semibold">resultados</span> ao longo dos anos.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Pesquisas */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-200">
            <div className="text-5xl md:text-6xl font-bold text-[#1595FF] mb-4">80+</div>
            <h3 className="text-xl font-bold text-[#282828] mb-4">Pesquisas Realizadas</h3>
            <p className="text-[#282828]/70 text-sm leading-relaxed">
              Mais de 80 pesquisas já realizadas nos últimos 10 anos, tanto qualitativas quanto quantitativas
            </p>
          </div>

          {/* Citações Acadêmicas */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-400">
            <div className="text-5xl md:text-6xl font-bold text-[#FF6339] mb-4">50+</div>
            <h3 className="text-xl font-bold text-[#282828] mb-4">Citações Acadêmicas</h3>
            <p className="text-[#282828]/70 text-sm leading-relaxed">
              Mais de 50 citações de pesquisas acadêmicas, nos 10 artigos já publicados
            </p>
          </div>

          {/* Pessoas Capacitadas */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-600">
            <div className="text-5xl md:text-6xl font-bold text-[#1595FF] mb-4">10+</div>
            <h3 className="text-xl font-bold text-[#282828] mb-4">Pessoas Capacitadas</h3>
            <p className="text-[#282828]/70 text-sm leading-relaxed">
              Mais de 10 pessoas já capacitadas em pesquisa, tanto para projetos científicos quanto para o mercado
            </p>
          </div>

          {/* Landing Pages */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-800">
            <div className="text-5xl md:text-6xl font-bold text-[#FF6339] mb-4">5+</div>
            <h3 className="text-xl font-bold text-[#282828] mb-4">Landing Pages</h3>
            <p className="text-[#282828]/70 text-sm leading-relaxed">
              Mais de 5 empresas já tiveram suas landing pages construídas com base em estudo e dados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BigNumbers;
