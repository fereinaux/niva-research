import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#37322c] via-[#2a2a2a] to-[#1f1f1f] relative overflow-hidden pt-4">
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
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-[#fff3e1] via-[#fff3e1]/90 to-[#fff3e1]/80 bg-clip-text text-transparent animate-gradient">
              Tudo começa
            </span>
            <span className="block text-[#fff3e1]">com uma pergunta</span>
            <span className="block bg-gradient-to-r from-[#ff2d2b] via-[#ef4444] to-[#f87171] bg-clip-text text-transparent animate-gradient">
              que você não respondeu.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-[#fff3e1]/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            A <span className="bg-gradient-to-r from-[#60a5fa] via-[#93c5fd] to-[#bfdbfe] bg-clip-text text-transparent font-semibold">Niva</span>{" "}
            transforma dados em informações relevantes e acionáveis, ajudando
            a enxergar o que não é possível sem pesquisa.
          </p>

          {/* CTA Button */}
          <Link to="/contato" className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-br from-[#3b10ff] via-[#4f46e5] to-[#6366f1] rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#3b10ff]/40 transform">
            <span className="relative z-10">Solicite uma proposta</span>
            <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/80 to-[#4f46e5] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-60">
            <div className="w-2 h-2 bg-[#3b10ff] rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-[#3b10ff]/80 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-[#ff2d2b] rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 