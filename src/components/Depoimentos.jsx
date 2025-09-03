import React, { useState, useEffect } from 'react';
import DepoimentosCards from './DepoimentosCards';

function Depoimentos() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollCarousel = (direction) => {
    const carousel = document.getElementById('depoimentos-carousel');
    if (carousel) {
      const slideWidth = carousel.offsetWidth;
      const newSlide = direction === 'next' 
        ? (currentSlide + 1) % 10 
        : (currentSlide - 1 + 10) % 10;
      
      setCurrentSlide(newSlide);
      carousel.style.transform = `translateX(-${newSlide * 100}%)`;
    }
  };

  const scrollToSlide = (index) => {
    const carousel = document.getElementById('depoimentos-carousel');
    if (carousel) {
      setCurrentSlide(index);
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  };



  return (
    <section id="depoimentos" className="min-h-screen bg-gradient-to-br from-white via-[#FFF3E1] to-white flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#1595FF] rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FF6339] rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#1595FF] rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto text-center px-2 sm:px-4 md:px-6 lg:px-8 relative z-10 w-full">
        <div className="mb-8 animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1595FF] to-[#0D7AE8] rounded-full shadow-lg mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-[#282828] animate-fade-in-up animate-delay-200">
          <span className="block">Veja o que dizem sobre</span>
          <span className="block text-[#1595FF]">o nosso trabalho</span>
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-[#282828]/80 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
          Recomendações reais de pessoas que já <span className="text-[#FF6339] font-semibold">experimentaram</span> o nosso jeito de trabalhar.
        </p>
        
        {/* Carrossel de depoimentos - 10 depoimentos */}
        <div className="animate-fade-in-up animate-delay-400">
          <div className="relative overflow-hidden w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-6">
            <div className="flex transition-transform duration-500 ease-in-out" id="depoimentos-carousel">
              <DepoimentosCards />
            </div>
          </div>

          {/* Controles do carrossel */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-[#1595FF] hover:text-white"
              onClick={() => scrollCarousel('prev')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-[#1595FF]' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  onClick={() => scrollToSlide(index)}
                ></button>
              ))}
            </div>
            
            <button 
              className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:bg-[#1595FF] hover:text-white"
              onClick={() => scrollCarousel('next')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Card CTA LinkedIn */}
        <div className="mt-12 animate-fade-in-up animate-delay-600">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
            <div className="text-center text-[#282828]">
              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Quer ver mais recomendações?
              </h3>
              
              <p className="text-sm md:text-base mb-6 leading-relaxed text-[#282828]/80">
                Acesse o perfil completo da Delly, fundadora da Niva, no LinkedIn.
              </p>
              
              <a 
                href="https://www.linkedin.com/in/adriellysouza/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 bg-[#1595FF] hover:bg-[#0D7AE8] rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16"></div>
    </section>
  );
}

export default Depoimentos;
