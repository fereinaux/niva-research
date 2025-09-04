import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Função para scroll suave para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  // Função combinada para fechar menu mobile e fazer scroll
  const handleNavigation = () => {
    closeMobileMenu();
    scrollToTop();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/Logos/logooficial.png" 
              alt="niva RESEARCH" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6 xl:space-x-8">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                onClick={scrollToTop}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/sobre' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Sobre
              </Link>
              <Link 
                to="/servicos" 
                onClick={scrollToTop}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/servicos' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Serviços
              </Link>
              <Link 
                to="/portfolio" 
                onClick={scrollToTop}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/portfolio' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Portfólio
              </Link>
              <Link 
                to="/contato" 
                onClick={scrollToTop}
                className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === '/contato' 
                    ? 'bg-[#1595FF] text-white' 
                    : 'text-[#282828] hover:text-[#1595FF]'
                }`}
              >
                Contato
              </Link>
              <button className="ml-4 px-4 xl:px-6 py-2 bg-[#FF6339] text-white text-sm font-semibold rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Dê o primeiro passo
              </button>
            </div>
          </nav>

          {/* Mobile CTA Button and Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* CTA Button - Always visible on mobile */}
            <button className="px-3 py-2 bg-[#FF6339] text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-[#FF6339]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Dê o primeiro passo
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#282828] hover:text-[#1595FF] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1595FF] transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            <Link 
              to="/" 
              onClick={handleNavigation}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === '/' 
                  ? 'bg-[#1595FF] text-white' 
                  : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
              }`}
            >
              Início
            </Link>
            <Link 
              to="/sobre" 
              onClick={handleNavigation}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === '/sobre' 
                  ? 'bg-[#1595FF] text-white' 
                  : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
              }`}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              onClick={handleNavigation}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === '/servicos' 
                  ? 'bg-[#1595FF] text-white' 
                  : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/portfolio" 
              onClick={handleNavigation}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === '/portfolio' 
                  ? 'bg-[#1595FF] text-white' 
                  : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
              }`}
            >
              Portfólio
            </Link>
            <Link 
              to="/contato" 
              onClick={handleNavigation}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.pathname === '/contato' 
                  ? 'bg-[#1595FF] text-white' 
                  : 'text-[#282828] hover:text-[#1595FF] hover:bg-gray-50'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
