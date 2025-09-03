import React from 'react';

function ResumoRapidoServicos() {
  return (
    <section id="resumo-servicos" className="min-h-screen bg-gradient-to-br from-white via-[#FFF3E1] to-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#1595FF] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FF6339] rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#1595FF] rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1595FF] to-[#0D7AE8] rounded-full shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#282828] animate-fade-in-up animate-delay-200">
          <span className="block">O que oferecemos para</span>
          <span className="block text-[#1595FF]">seu negócio</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[#282828]/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Transformamos <span className="text-[#FF6339] font-semibold">dados em estratégias</span> que geram resultados concretos para o seu negócio e/ou a sua carreira.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Pesquisas */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-200">
            <div className="w-16 h-16 bg-[#1595FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#282828] mb-4">Pesquisas</h3>
            <p className="text-lg text-[#282828]/80 mb-4">
              Descubra o que você precisa e tome decisões concretas.
            </p>
            <p className="text-[#282828]/70">
              De personas a concorrência, entregamos clareza para decisões assertivas.
            </p>
          </div>

          {/* Capacitações */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-400">
            <div className="w-16 h-16 bg-[#FF6339] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#282828] mb-4">Capacitações</h3>
            <p className="text-lg text-[#282828]/80 mb-4">
              Transforme pessoas e equipes em times estratégicos.
            </p>
            <p className="text-[#282828]/70">
              Treinamentos práticos em cultura e método de pesquisa.
            </p>
          </div>

          {/* Landing Pages */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animate-delay-600">
            <div className="w-16 h-16 bg-[#1595FF] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#282828] mb-4">Landing Pages orientadas por dados</h3>
            <p className="text-lg text-[#282828]/80 mb-4">
              Do insight ao design, criamos páginas que conectam.
            </p>
            <p className="text-[#282828]/70">
              Comunicação digital feita para engajar e converter.
            </p>
          </div>
        </div>
        
        <div className="mt-16 mb-16 animate-fade-in-up animate-delay-800">
          <p className="text-lg text-[#282828]/70 mb-8">
            Pronto para transformar dados em <span className="text-[#1595FF] font-semibold">vantagem competitiva</span>?
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-[#FF6339] text-white font-semibold rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Conheça nossos casos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumoRapidoServicos;
