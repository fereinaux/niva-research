import React from 'react';

function HistoriaNome() {
  return (
    <section id="historia-nome" className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
            Por trás de cada <span className="text-[#1595FF]">insight</span>, há uma <span className="text-[#FF6339]">história</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça a origem do nosso nome e o legado que nos move todos os dias
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Painel Esquerdo - História da Niva */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
            {/* Elemento decorativo no canto superior direito */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1595FF]/10 to-[#FF6339]/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            {/* Logo mascote */}
            <div className="w-16 h-16 mb-6 relative z-10">
              <img 
                src="/Logos/logomascote.png" 
                alt="Mascote Niva - Cão farejador"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Texto principal */}
            <div className="space-y-4 mb-6 relative z-10">
              <p className="text-base md:text-lg text-[#282828] leading-relaxed">
                A Niva nasceu da união entre a paixão pela pesquisa e desejo de fazer a diferença.
              </p>
              <p className="text-base md:text-lg text-[#282828] leading-relaxed">
                O amor pela metodologia da pesquisa e a valorização de princípios é o que nos move.
              </p>
              <p className="text-base md:text-lg text-[#282828] leading-relaxed">
                O cão farejador da nossa marca representa a nossa busca incessante por insights, "farejando" as descobertas mais assertivas!
              </p>
            </div>
            
            {/* Caixa destacada */}
            <div className="bg-white border-l-4 border-[#1595FF] p-4 rounded-r-lg shadow-sm relative z-10">
              <p className="text-sm md:text-base text-[#282828] leading-relaxed">
                O nosso nome é uma homenagem ao Nivaldo, o pai e grande incentivador da carreira da Delly.
              </p>
            </div>
          </div>

          {/* Painel Direito - Empresa com Propósito */}
          <div className="bg-gradient-to-br from-[#FFF3E1] to-[#FFE4B5] rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
            {/* Elemento decorativo no canto superior direito */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF6339]/10 to-[#1595FF]/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            {/* Foto da Delly e Nivaldo */}
            <div className="flex justify-center mb-6 relative z-10">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/Fotos/painho.png" 
                    alt="Delly e Nivaldo Severiano"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                {/* Ícone do coração posicionado no canto inferior direito */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
                  <div className="w-5 h-5 text-[#FF6339] animate-heartbeat">
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Título e subtítulo */}
            <div className="text-center mb-6 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-[#282828] mb-2">
                Uma empresa com propósito
              </h3>
              <p className="text-base md:text-lg text-[#282828]/80">
                Em memória de Nivaldo Severiano
              </p>
            </div>
            
            {/* Cards dos valores */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 relative z-10">
              {/* Expertise */}
              <div className="bg-white rounded-2xl p-4 md:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 bg-gradient-to-br from-[#1595FF] to-[#0ea5e9] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z"/>
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-[#282828]">Expertise</p>
              </div>
              
              {/* Legado */}
              <div className="bg-white rounded-2xl p-4 md:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 bg-gradient-to-br from-[#FF6339] to-[#ff8c69] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-[#282828]">Legado</p>
              </div>
              
              {/* Valores */}
              <div className="bg-white rounded-2xl p-4 md:p-5 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 bg-gradient-to-br from-[#1595FF] to-[#FF6339] rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="text-sm md:text-base font-semibold text-[#282828]">Valores</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoriaNome;
