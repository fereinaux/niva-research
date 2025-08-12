import React from 'react';
import { Link } from 'react-router-dom';

function AboutNiva() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Quem faz a Niva Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#37322c] via-[#2a2a2a] to-[#1f1f1f] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g fill="none" fillRule="evenodd">
              <g fill="#ffffff" fillOpacity="0.1">
                <circle cx="30" cy="30" r="2" />
              </g>
            </g>
          </svg>
        </div>
        
        {/* Enhanced visual effects with multiple layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#ff2d2b]/15 to-transparent"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-[#3b10ff]/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 bg-[#ff2d2b]/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-20 w-20 h-20 md:w-24 md:h-24 bg-[#60a5fa]/15 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-[#3b10ff] to-[#ff2d2b] rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            {/* Main content */}
            <div className="relative z-10">
              <div className="inline-block mb-4 md:mb-6">
                <div className="bg-[#fff3e1]/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-1.5 md:py-2 border border-[#fff3e1]/20">
                  <span className="text-[#fff3e1] text-xs md:text-sm font-medium">Nossa fundadora</span>
                </div>
              </div>
              
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#fff3e1] mb-4 md:mb-6 leading-tight">
                Quem forma a{" "}
                <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#bfdbfe] bg-clip-text text-transparent">
                  Niva?
                </span>
              </h2>
              

              

              
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-[#3b10ff] to-[#ff2d2b] rounded-full opacity-60 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-[#60a5fa] to-[#3b10ff] rounded-full opacity-60 animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Modern Circular Photo Container */}
              <div className="relative mx-auto lg:mx-0 mb-8 md:mb-12 group">
                {/* Circular Background with Enhanced Glow */}
                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto lg:mx-0">
                  {/* Outer Ring Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3b10ff] via-[#6366f1] to-[#60a5fa] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
                  
                  {/* Middle Ring Glow */}
                  <div className="absolute inset-3 bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-all duration-700 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  {/* Inner Ring Glow */}
                  <div className="absolute inset-6 bg-gradient-to-r from-[#f59e0b] via-[#eab308] to-[#fbbf24] rounded-full blur-lg opacity-15 group-hover:opacity-30 transition-all duration-700 animate-pulse" style={{animationDelay: '1s'}}></div>
                  
                  {/* Main Circular Container */}
                  <div className="relative w-full h-full bg-[#fff3e1] rounded-full p-3 shadow-2xl shadow-black/30 transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-700 border-4 border-[#fff3e1]/95 overflow-hidden">
                    {/* Photo */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <img 
                        src="/delly-nova.png" 
                        alt="Delly - Pesquisadora e fundadora da Niva" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#000]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Subtle Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/10 via-transparent to-[#ff2d2b]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-[#3b10ff] to-[#6366f1] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  <div className="absolute -bottom-3 -left-3 w-5 h-5 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500" style={{transitionDelay: '0.1s'}}>
                    <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  

                </div>
                

                

              </div>
              <p className="text-base md:text-lg lg:text-xl text-[#fff3e1]/80 leading-relaxed mb-4">
                Oi! :) Sou a Delly e estou há quase 10 anos atuando como pesquisadora. Costumo dizer que, como boa curiosa que sou, sinto que nasci para isso: ser pesquisadora e responder dúvidas.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-[#fff3e1]/80 leading-relaxed mb-4 md:mb-6">
                Após realizar pesquisas para universidades, órgãos públicos, multinacional e startup, o meu objetivo é levar para os projetos da Niva o melhor do que aprendi atuando em cada um destes universos.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-[#fff3e1]/80 leading-relaxed">
                Vai ser um prazer tirar a suas dúvidas e te proporcionar decisões mais assertivas!
              </p>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#fff3e1]/10 via-[#fff3e1]/5 to-[#fff3e1]/10 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden border border-[#fff3e1]/20">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#3b10ff]/20 to-[#ff2d2b]/20 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#60a5fa]/20 to-[#3b10ff]/20 rounded-full translate-y-8 md:translate-y-12 -translate-x-8 md:-translate-x-12 opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg shadow-[#ff2d2b]/25">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-[#fff3e1] mb-2">Uma carreira sólida</h3>
                    <p className="text-[#fff3e1]/70 text-xs md:text-sm">10 anos de jornada em diferentes universos</p>
                  </div>
                  
                  <div className="space-y-3 md:space-y-4">
                    <div className="group relative bg-[#fff3e1]/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-[#fff3e1]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#fff3e1]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3b10ff] to-[#6366f1] rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-md">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#fff3e1] text-base md:text-lg">Universidades</div>
                          <div className="text-[#fff3e1]/70 text-xs md:text-sm">Acadêmico & Pesquisa</div>
                        </div>

                      </div>
                    </div>

                    <div className="group relative bg-[#fff3e1]/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-[#fff3e1]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#fff3e1]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#6366f1] to-[#60a5fa] rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-md">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#fff3e1] text-base md:text-lg">Órgãos Públicos</div>
                          <div className="text-[#fff3e1]/70 text-xs md:text-sm">Governamental & Social</div>
                        </div>

                      </div>
                    </div>

                    <div className="group relative bg-[#fff3e1]/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-[#fff3e1]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#fff3e1]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#60a5fa] to-[#3b10ff] rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-md">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#fff3e1] text-base md:text-lg">Multinacional</div>
                          <div className="text-[#fff3e1]/70 text-xs md:text-sm">Corporativo & Estratégico</div>
                        </div>

                      </div>
                    </div>

                    <div className="group relative bg-[#fff3e1]/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 hover:bg-[#fff3e1]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-[#fff3e1]/20">
                      <div className="flex items-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3b10ff] to-[#6366f1] rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-md">
                          <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-[#fff3e1] text-base md:text-lg">Startup</div>
                          <div className="text-[#fff3e1]/70 text-xs md:text-sm">Inovação & Agilidade</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Origem da Niva Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fff3e1]/80 via-[#fff3e1]/60 to-[#fff3e1]/40 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/4 via-transparent to-[#ff2d2b]/4"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#60a5fa]/3 via-transparent to-[#f59e0b]/3"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/12 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/12 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#60a5fa]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Additional subtle shadows for depth */}
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/6 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        
        {/* Horizontal gradient overlay for sophistication */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e1]/6 to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">Porque e como começamos?</h2>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto">
              A nossa história importa e, por causa dela, chegamos até aqui.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-[#d4a574]/30 relative overflow-hidden border border-[#fff3e1]/30">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#3b10ff]/20 to-[#6366f1]/20 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#ff2d2b]/20 to-[#ef4444]/20 rounded-full translate-y-8 md:translate-y-12 -translate-x-8 md:-translate-x-12 opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 md:mb-8 shadow-lg shadow-[#ff2d2b]/25 overflow-hidden border border-[#3b10ff]/20">
                    <img 
                      src="/cachorro-vermelho.png" 
                      alt="Cachorro - Companheiro e amigo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed mb-4 md:mb-6">
                    A Niva nasceu da união entre a paixão pela pesquisa e desejo de fazer a diferença.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed mb-4 md:mb-6">
                    O amor pela metodologia da pesquisa e a valorização de princípios é o que nos move.
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-slate-700 leading-relaxed mb-4 md:mb-6">
                    O cão farejador da nossa marca representa a nossa busca incessante por insights, "farejando" as descobertas mais assertivas!
                  </p>
                  <div className="bg-gradient-to-r from-[#fff3e1]/50 to-[#fff3e1]/30 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-[#3b10ff]">
                    <p className="text-base md:text-lg lg:text-xl font-semibold text-slate-800 leading-relaxed">
                      O nosso nome é uma homenagem ao Nivaldo, o pai e grande incentivador da carreira da Delly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-[#fff3e1]/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 relative overflow-hidden shadow-xl shadow-[#d4a574]/30 border border-[#fff3e1]/40">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#ff2d2b]/20 to-[#ef4444]/20 rounded-full -translate-y-16 md:-translate-y-20 translate-x-16 md:translate-x-20 opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#60a5fa]/20 to-[#3b10ff]/20 rounded-full translate-y-12 md:translate-y-16 -translate-x-12 md:-translate-x-16 opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative z-10">
                  {/* Image Section */}
                  <div className="text-center mb-6 md:mb-8">
                    <div className="relative inline-block">
                      <div className="w-36 h-36 md:w-48 md:h-48 bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg shadow-[#ff2d2b]/25 relative overflow-hidden">
                        <img 
                          src="/niva-photo.png" 
                          alt="Nivaldo - Pai e incentivador" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d2b]/20 via-[#ef4444]/20 to-[#f87171]/20"></div>
                      </div>
                      <div className="absolute bottom-3 right-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-2">Uma empresa com propósito</h3>
                    <p className="text-slate-600 text-xs md:text-sm">
                      Em memória de Nivaldo Severiano
                    </p>
                  </div>
                  
                  {/* Three Pillars */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 group">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#3b10ff] to-[#6366f1] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-[#3b10ff] text-xs md:text-sm">Expertise</span>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 group">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477-4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <span className="font-semibold text-[#6366f1] text-xs md:text-sm">Legado</span>
                    </div>
                    
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 text-center hover:bg-white/90 transition-all duration-300 hover:scale-105 group">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-md group-hover:shadow-lg transition-shadow">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-[#60a5fa] text-xs md:text-sm">Valores</span>
                    </div>
                  </div>
                  
                  {/* Decorative Quote */}
                  <div className="mt-6 text-center">
                    <div className="inline-block bg-gradient-to-r from-[#60a5fa]/25 to-[#93c5fd]/25 rounded-full px-4 py-2 relative overflow-hidden">
                      {/* Subtle background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/15 to-[#93c5fd]/15 rounded-full"></div>
                      
                      {/* Tag indicator */}
                      <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] rounded-full opacity-80"></div>
                      
                      <p className="text-sm text-slate-700 italic relative z-10 font-medium">
                        "O amor pela pesquisa e a valorização de princípios"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#fff3e1]/20 via-[#fff3e1]/15 to-[#fff3e1]/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/2 via-transparent to-[#ff2d2b]/2"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#60a5fa]/1.5 via-transparent to-[#f59e0b]/1.5"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/4 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/4 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-32 w-32 h-32 bg-gradient-to-br from-[#60a5fa]/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Additional subtle shadows for depth */}
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-[#f59e0b]/2.5 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-tl from-[#3b10ff]/2 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        
        {/* Horizontal gradient overlay for sophistication */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fff3e1]/3 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6">
              Agora que você já nos conhece, entenda nossos{' '}
              <span className="bg-gradient-to-r from-[#3b10ff] to-[#60a5fa] bg-clip-text text-transparent">
                valores
              </span>:
            </h2>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Value 1 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-[#d4a574]/25 hover:shadow-2xl hover:shadow-[#d4a574]/35 transition-all duration-300 border border-[#fff3e1]/40 hover:scale-105 group">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-lg md:text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-[#3b10ff] transition-colors duration-300">Cooperação e empatia</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    As pessoas importam muito para nós e elas são o começo, meio e fim de quem somos e o que fazemos.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-[#d4a574]/25 hover:shadow-2xl hover:shadow-[#d4a574]/35 transition-all duration-300 border border-[#fff3e1]/40 hover:scale-105 group">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-lg md:text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-[#ff2d2b] transition-colors duration-300">Integridade intelectual e metodológica</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Com anos de experiência no que fazemos, usamos a nossa expertise para escolher métodos assertivos e alinhados com a necessidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-[#d4a574]/25 hover:shadow-2xl hover:shadow-[#d4a574]/35 transition-all duration-300 border border-[#fff3e1]/40 hover:scale-105 group">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-lg md:text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-[#60a5fa] transition-colors duration-300">Compromisso e responsabilidade</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Não abrimos mão do nosso compromisso com quem nos contrata. Somos profissionais e prezamos por isso.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-[#d4a574]/25 hover:shadow-2xl hover:shadow-[#d4a574]/35 transition-all duration-300 border border-[#fff3e1]/40 hover:scale-105 group">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-lg md:text-2xl font-bold text-white">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-[#f59e0b] transition-colors duration-300">Propósito com impacto</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    Acreditamos que os nossos pilares são realmente valiosos e entregam resultados palpáveis para os envolvidos.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 5 */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl shadow-[#d4a574]/25 hover:shadow-2xl hover:shadow-[#d4a574]/35 transition-all duration-300 border border-[#fff3e1]/40 hover:scale-105 group">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#ff2d2b] to-[#ef4444] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <span className="text-lg md:text-2xl font-bold text-white">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-3 md:mb-4 group-hover:text-[#8b5cf6] transition-colors duration-300">Legado e aprendizado contínuo</h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    A nossa trajetória nos conduziu até aqui e a nossa busca por aprendizados será o que nos levará adiante.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/8 via-transparent to-[#ff2d2b]/8"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-[#60a5fa]/6 via-transparent to-[#f59e0b]/6"></div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#3b10ff]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-tl from-[#ff2d2b]/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#fff3e1] mb-6 md:mb-8">
            Pronto para começar sua{" "}
            <span className="bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] bg-clip-text text-transparent">
              jornada conosco?
            </span>
          </h2>
          <p className="text-base md:text-xl text-slate-200 mb-6 md:mb-8">
            Vamos transformar suas dúvidas em insights valiosos
          </p>
          <Link to="/contato" className="inline-flex items-center px-5 md:px-6 lg:px-8 py-3 md:py-4 bg-gradient-to-r from-[#3b10ff] to-[#6366f1] text-white rounded-full font-semibold hover:from-[#3b10ff]/90 hover:to-[#6366f1]/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[#3b10ff]/25 hover:shadow-xl hover:shadow-[#3b10ff]/35">
            <svg className="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AboutNiva; 