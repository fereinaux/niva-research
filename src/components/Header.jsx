import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre nós', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Portfólio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contato', path: '/contato' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/Logos/logooficial.png" 
              alt="Niva" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-gray-700 hover:text-[#3B10FF] font-medium transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B10FF] to-[#FF2DB] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Fale conosco
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#E8E8D0] transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#F5F5DC] rounded-lg mt-2 shadow-lg border border-[#E8E8D0]">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-700 hover:text-[#3B10FF] hover:bg-[#E8E8D0] rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
                             <div className="pt-4">
                 <button className="w-full bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700">
                   Fale conosco
                 </button>
               </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 