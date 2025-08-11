import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#fff3e1]/98 backdrop-blur-xl shadow-2xl' 
        : 'bg-gradient-to-b from-[#fff3e1] to-[#fff3e1]/95 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="group relative flex items-center transition-all duration-300 transform hover:scale-105"
          >
            <img 
              src="/NIVA-LOGO.png" 
              alt="Niva Research" 
              className="h-8 md:h-12 w-auto transition-all duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#3b10ff]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 md:space-x-2">
            <Link 
              to="/" 
              className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 group ${
                isActive('/') 
                  ? 'text-[#3b10ff] bg-gradient-to-br from-[#fff3e1] to-[#fff3e1]/90 shadow-lg shadow-[#3b10ff]/25 backdrop-blur-sm' 
                  : 'text-[#282828] hover:text-[#3b10ff] hover:bg-gradient-to-br hover:from-[#fff3e1]/80 hover:to-[#fff3e1]/60 hover:shadow-md hover:shadow-[#3b10ff]/15'
              }`}
            >
              <span className="relative z-10">Início</span>
              {isActive('/') && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-[#3b10ff]/5 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/10 to-[#3b10ff]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/sobre" 
              className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 group ${
                isActive('/sobre') 
                  ? 'text-[#3b10ff] bg-gradient-to-br from-[#fff3e1] to-[#fff3e1]/90 shadow-lg shadow-[#3b10ff]/25 backdrop-blur-sm' 
                  : 'text-[#282828] hover:text-[#3b10ff] hover:bg-gradient-to-br hover:from-[#fff3e1]/80 hover:to-[#fff3e1]/60 hover:shadow-md hover:shadow-[#3b10ff]/15'
              }`}
            >
              <span className="relative z-10">Sobre a Niva</span>
              {isActive('/sobre') && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-[#3b10ff]/5 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/10 to-[#3b10ff]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/produtos" 
              className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 group ${
                isActive('/produtos') 
                  ? 'text-[#3b10ff] bg-gradient-to-br from-[#fff3e1] to-[#fff3e1]/90 shadow-lg shadow-[#3b10ff]/25 backdrop-blur-sm' 
                  : 'text-[#282828] hover:text-[#3b10ff] hover:bg-gradient-to-br hover:from-[#fff3e1]/80 hover:to-[#fff3e1]/60 hover:shadow-md hover:shadow-[#3b10ff]/15'
              }`}
            >
              <span className="relative z-10">Produtos</span>
              {isActive('/produtos') && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-[#3b10ff]/5 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/10 to-[#3b10ff]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/contato" 
              className={`relative px-4 md:px-6 py-2.5 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-300 group ${
                isActive('/contato') 
                  ? 'text-[#3b10ff] bg-gradient-to-br from-[#fff3e1] to-[#fff3e1]/90 shadow-lg shadow-[#3b10ff]/25 backdrop-blur-sm' 
                  : 'text-[#282828] hover:text-[#3b10ff] hover:bg-gradient-to-br hover:from-[#fff3e1]/80 hover:to-[#fff3e1]/60 hover:shadow-md hover:shadow-[#3b10ff]/15'
              }`}
            >
              <span className="relative z-10">Contato</span>
              {isActive('/contato') && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/15 to-[#3b10ff]/5 rounded-full animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3b10ff]/10 to-[#3b10ff]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <div className="w-px h-6 md:h-8 bg-gradient-to-b from-transparent via-[#3b10ff]/40 to-transparent mx-2 md:mx-4"></div>

            <Link to="/contato" className="group relative px-4 md:px-6 lg:px-8 py-2.5 md:py-3 bg-gradient-to-br from-[#ff2d2b] via-[#ff2d2b] to-[#ff2d2b]/90 text-white rounded-full overflow-hidden transition-all duration-500 hover:from-[#ff2d2b]/90 hover:via-[#ff2d2b] hover:to-[#ff2d2b] hover:scale-105 hover:shadow-2xl hover:shadow-[#ff2d2b]/40 transform">
              <span className="relative z-10 flex items-center">
                <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1.5 md:mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-bold">Fale agora</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d2b]/80 to-[#ff2d2b] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </Link>
          </nav>

          {/* Mobile Layout - New Design */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile CTA Button */}
            <Link to="/contato" className="group relative px-3 py-2 bg-gradient-to-br from-[#ff2d2b] via-[#ff2d2b] to-[#ff2d2b]/90 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:from-[#ff2d2b]/90 hover:via-[#ff2d2b] hover:to-[#ff2d2b] hover:scale-105 hover:shadow-lg transform overflow-hidden">
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-1.5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="hidden sm:inline font-bold">Fale agora</span>
                <span className="sm:hidden font-bold">Fale agora</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="relative p-2 rounded-lg text-[#282828] hover:text-[#3b10ff] hover:bg-gradient-to-br hover:from-[#fff3e1]/80 hover:to-[#fff3e1]/60 transition-all duration-300 group"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute top-0 left-0 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                }`}></span>
                <span className={`absolute top-2 left-0 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute top-4 left-0 w-5 h-0.5 bg-current transform transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Overlay */}
        <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-40 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsMenuOpen(false)}>
          <div className={`absolute top-0 left-0 right-0 bg-[#fff3e1] shadow-2xl transform transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`} onClick={(e) => e.stopPropagation()}>
            <div className="pt-8 px-6 pb-6 space-y-4">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#3b10ff]/20">
                <h3 className="text-lg font-bold text-[#282828]">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg text-[#3b10ff] hover:text-[#3b10ff]/80 hover:bg-[#fff3e1] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 group ${
                    isActive('/') 
                      ? 'text-[#3b10ff] bg-[#fff3e1] shadow-md border border-[#3b10ff]/20' 
                      : 'text-[#282828] hover:text-[#3b10ff] hover:bg-[#fff3e1]/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Início
                </Link>
                
                <Link 
                  to="/sobre" 
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 group ${
                    isActive('/sobre') 
                      ? 'text-[#3b10ff] bg-[#fff3e1] shadow-md border border-[#3b10ff]/20' 
                      : 'text-[#282828] hover:text-[#3b10ff] hover:bg-[#fff3e1]/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sobre a Niva
                </Link>
                
                <Link 
                  to="/produtos" 
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 group ${
                    isActive('/produtos') 
                      ? 'text-[#3b10ff] bg-[#fff3e1] shadow-md border border-[#3b10ff]/20' 
                      : 'text-[#282828] hover:text-[#3b10ff] hover:bg-[#fff3e1]/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  Produtos
                </Link>
                
                <Link 
                  to="/contato" 
                  className={`flex items-center px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 group ${
                    isActive('/contato') 
                      ? 'text-[#3b10ff] bg-[#fff3e1] shadow-md border border-[#3b10ff]/20' 
                      : 'text-[#282828] hover:text-[#3b10ff] hover:bg-[#fff3e1]/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contato
                </Link>
              </div>

              {/* Mobile CTA Section */}
              <div className="pt-4 border-t border-[#3b10ff]/20">
                <Link to="/contato" className="w-full group relative px-4 py-3 bg-[#ff2d2b] text-white rounded-xl font-bold text-sm transition-all duration-300 hover:bg-[#ff2d2b]/90 hover:scale-105 hover:shadow-lg transform flex items-center justify-center" onClick={() => setIsMenuOpen(false)}>
                  <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-bold">Fale agora</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 