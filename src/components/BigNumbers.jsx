import React from 'react';

function BigNumbers() {
  return (
    <section id="big-numbers" className="min-h-screen bg-gradient-to-br from-[#FFF3E1] via-white to-[#FFF3E1] flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FF6339] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#1595FF] rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#FF6339] rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center px-4 relative z-10">
        {/* Conteúdo será adicionado posteriormente */}
      </div>
    </section>
  );
}

export default BigNumbers;
