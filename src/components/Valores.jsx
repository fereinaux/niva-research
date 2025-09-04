import React from 'react';

function Valores() {
  const valores = [
    {
      titulo: "Cooperação e empatia",
      descricao: "As pessoas estão no centro de tudo o que fazemos, do início ao fim.",
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      cor: "from-[#1595FF] to-[#0ea5e9]"
    },
    {
      titulo: "Criatividade assertiva",
      descricao: "Buscamos soluções inteligentes e aplicáveis, sem perder a clareza.",
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      ),
      cor: "from-[#FF6339] to-[#ff8c69]"
    },
    {
      titulo: "Compromisso e responsabilidade",
      descricao: "Entregamos com seriedade, profissionalismo e confiança.",
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      cor: "from-[#1595FF] to-[#FF6339]"
    },
    {
      titulo: "Orientação à aplicabilidade",
      descricao: "Nossos resultados geram valor real e impacto tangível.",
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      cor: "from-[#FF6339] to-[#1595FF]"
    },
    {
      titulo: "Legado e aprendizado contínuo",
      descricao: "Evoluímos constantemente para enriquecer cada entrega.",
      icone: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      cor: "from-[#1595FF] to-[#0ea5e9]"
    }
  ];

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-4">
            Os <span className="text-[#1595FF]">valores</span> que nos <span className="text-[#FF6339]">guiam</span> todos os dias
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais do que metodologia, acreditamos em princípios que transformam dados em decisões éticas e impactantes
          </p>
        </div>

        {/* Grid de valores */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valores.map((valor, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden"
            >
              {/* Ícone pequeno */}
              <div className="w-12 h-12 bg-[#1595FF] rounded-xl flex items-center justify-center mb-4">
                <div className="text-white">
                  {valor.icone}
                </div>
              </div>
              
              {/* Conteúdo */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-[#282828] mb-3 leading-tight">
                  {valor.titulo}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {valor.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Valores;
