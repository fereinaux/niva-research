import React from 'react';

function ChamadaFinalSobre() {
  return (
    <section id="chamada-final-sobre" className="py-16 px-4 relative z-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1595FF] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#FF6339] rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#1595FF] rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6339] to-[#E55A2B] rounded-full shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        
        {/* Tag introdutória */}
        <div className="mb-6 animate-fade-in-up animate-delay-100">
          <span className="inline-block bg-[#fff3e1] text-[#FF6339] px-4 py-2 rounded-full text-sm font-semibold border border-[#FF6339]/20">
            Nosso diferencial
          </span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#282828] animate-fade-in-up animate-delay-200">
          <span className="block">Na Niva, nossas pesquisas</span>
          <span className="block text-[#FF6339]">se tornam ações</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[#282828]/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Utilizamos a metodologia <span className="text-[#1595FF] font-semibold">Double Diamond</span> para transformar dados em <span className="text-[#FF6339] font-semibold">ações concretas</span> que geram resultados reais para seu negócio.
        </p>
        
        {/* Card CTA Principal */}
        <div className="animate-fade-in-up animate-delay-400">
          <div className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 max-w-2xl mx-auto border border-white/30 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#1595FF]/20 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#FF6339]/20 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-[#1595FF]/5 to-[#FF6339]/5 rounded-full blur-2xl"></div>
            
            <div className="text-center text-[#282828] relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#282828]">
                Pronto para <span className="text-[#1595FF]">conectar pesquisa à prática</span>?
              </h3>
              
              <p className="text-base md:text-lg mb-6 leading-relaxed text-[#282828]/80 max-w-xl mx-auto">
                Vamos conversar sobre como a metodologia Double Diamond pode transformar seus dados em resultados estratégicos para seu negócio.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="/contato" 
                  className="inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#1595FF] to-[#0D7AE8] hover:from-[#0D7AE8] hover:to-[#1595FF] text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-xl"
                >
                  <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Fale conosco
                </a>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#282828]/10">
                <p className="text-xs text-[#282828]/60">
                  <span className="font-semibold">Orçamento gratuito</span> • Sem compromisso • Resposta em até 24h
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ChamadaFinalSobre;
