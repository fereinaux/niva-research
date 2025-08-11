import React from 'react';
import { Link } from 'react-router-dom';

function CallToActionSection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-[#37322c] via-[#2a2a2a] to-[#1f1f1f] relative overflow-hidden">
      {/* Enhanced visual effects with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-[#ff2d2b]/15 to-transparent"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#60a5fa]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "3s" }}></div>
      
      {/* Additional subtle shadows for depth */}
      <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/8 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2.5s" }}></div>
      
      {/* Horizontal gradient overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e1]/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            <span className="block text-[#fff3e1]">
              Chegou a hora
            </span>
            <span className="block text-[#fff3e1]">de sanar as dúvidas</span>
            <span className="block bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] bg-clip-text text-transparent">
              da sua organização.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-[#fff3e1]/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Vamos fazer isso <span className="text-[#60a5fa] font-semibold">pesquisando juntos</span>?
          </p>

          {/* CTA Button */}
          <div className="mb-8 md:mb-16">
            <Link to="/contato" className="group relative inline-flex items-center justify-center px-4 md:px-6 lg:px-8 py-2.5 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-[#3b10ff] to-[#4f46e5] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b10ff]/40 transform hover:-translate-y-1">
              <span className="relative z-10 flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 mr-1.5 md:mr-2 lg:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Fale agora mesmo
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
          </div>

          {/* Additional Elements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
            {/* Value Element 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3b10ff] to-[#4f46e5] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2">Cooperação e Empatia</h3>
              <p className="text-[#fff3e1]/80 text-xs md:text-sm">Trabalhamos juntos para entender suas necessidades e objetivos</p>
            </div>

            {/* Value Element 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2">Integridade Metodológica</h3>
              <p className="text-[#fff3e1]/80 text-xs md:text-sm">Rigor científico e transparência em todas as nossas pesquisas</p>
            </div>

            {/* Value Element 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-base md:text-lg mb-2">Propósito com Impacto</h3>
              <p className="text-[#fff3e1]/80 text-xs md:text-sm">Pesquisas que geram mudanças reais e resultados mensuráveis</p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 md:mt-16 flex justify-center space-x-4 md:space-x-8 opacity-50">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#3b10ff] rounded-full animate-bounce"></div>
            <div
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff2d2b] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#60a5fa] rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection; 