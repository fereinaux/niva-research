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
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-slate-200/60' 
        : 'bg-white/90 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="group relative text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Niva</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <Link 
              to="/" 
              className={`relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                isActive('/') 
                  ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/80'
              }`}
            >
              <span className="relative z-10">Início</span>
              {isActive('/') && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/sobre" 
              className={`relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                isActive('/sobre') 
                  ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/80'
              }`}
            >
              <span className="relative z-10">Sobre a Niva</span>
              {isActive('/sobre') && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/contato" 
              className={`relative px-6 py-3 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                isActive('/contato') 
                  ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/80'
              }`}
            >
              <span className="relative z-10">Contato</span>
              {isActive('/contato') && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl animate-pulse"></div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <div className="w-px h-8 bg-gradient-to-b from-transparent via-slate-300 to-transparent mx-4"></div>

            <button className="group relative px-8 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 transform">
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Solicitar Proposta
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative p-3 rounded-2xl text-slate-700 hover:text-emerald-600 hover:bg-slate-100/80 transition-all duration-300 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'
              }`}></span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-slate-200/60 bg-white/95 backdrop-blur-xl rounded-3xl mt-3 shadow-2xl">
            <div className="px-4 space-y-3">
              <Link 
                to="/" 
                className={`block px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                  isActive('/') 
                    ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/80'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Início
                </span>
              </Link>
              
              <Link 
                to="/sobre" 
                className={`block px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                  isActive('/sobre') 
                    ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/80'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Sobre a Niva
                </span>
              </Link>
              
              <Link 
                to="/contato" 
                className={`block px-6 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 group ${
                  isActive('/contato') 
                    ? 'text-emerald-600 bg-gradient-to-r from-emerald-50 to-teal-50 shadow-lg shadow-emerald-500/20' 
                    : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50/80'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contato
                </span>
              </Link>
              
              <div className="pt-4">
                <button className="w-full group relative px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 transform">
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Solicitar Proposta
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 