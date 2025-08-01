import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <g fill="none" fillRule="evenodd">
            <g fill="#ffffff" fillOpacity="0.05">
              <circle cx="30" cy="30" r="2" />
            </g>
          </g>
        </svg>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/15 to-cyan-500/10 animate-pulse"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Tudo começa
            </span>
            <span className="block text-white">com uma pergunta</span>
            <span className="block bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent animate-gradient">
              que você não respondeu.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            A <span className="text-cyan-300 font-semibold">Niva</span>{" "}
            transforma dados em informações relevantes e acionáveis, ajudando
            a enxergar o que não é possível sem pesquisa.
          </p>

          {/* CTA Button */}
          <Link to="/contato" className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
            <span className="relative z-10">Solicite uma proposta</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </Link>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-50">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );
}

export default HeroSection; 