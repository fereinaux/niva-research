import React from 'react';

function Contato() {
  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-[#FF6339]/5 via-white to-[#1595FF]/5 relative">
      
      {/* Seção de Contato */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#282828] mb-6">
              Vamos <span className="text-[#1595FF]">conversar</span> sobre a sua necessidade?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Pronto para transformar dados em estratégia? Vamos juntos transformá-lo em estratégia com pesquisa e comunicação digital.
            </p>
            
            {/* Destaque especial */}
            <div className="bg-gradient-to-r from-[#FF6339]/10 to-[#1595FF]/10 rounded-xl p-6 border border-gray-100 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-3">
                <div className="w-8 h-8 bg-[#FF6339] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-lg">💬</span>
                </div>
                <h2 className="text-xl font-bold text-[#282828]">Primeira conversa gratuita</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Vamos entender suas necessidades e mostrar como podemos ajudar seu negócio a crescer com base em dados reais.
              </p>
            </div>
          </div>
          
          {/* Conteúdo da seção será adicionado aqui */}
          <div className="text-center">
            <p className="text-gray-500">Conteúdo em desenvolvimento</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contato;
