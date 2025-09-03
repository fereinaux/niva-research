import React from 'react';

function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-[#FFF3E1] via-white to-[#FFF3E1] flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1595FF] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6339] rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#1595FF] rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-[#282828] animate-fade-in-up">
          <span className="block text-[#1595FF]">Decisões guiadas por dados,</span>
          <span className="block text-[#282828]">não por achismos.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-[#282828]/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Unimos pesquisa, capacitação e comunicação digital para transformar dados em estratégias que geram <span className="text-[#FF6339] font-semibold">impacto</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400 px-4 sm:px-0">
          <button className="px-4 sm:px-8 py-4 bg-[#FF6339] text-white font-semibold rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Fale com a Niva
          </button>
          <button className="px-4 sm:px-8 py-4 border-2 border-[#1595FF] text-[#1595FF] font-semibold rounded-lg hover:bg-[#1595FF] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
