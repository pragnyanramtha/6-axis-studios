import React, { useState } from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pages = ['Home', 'About', 'Process', 'Services', 'Contact'];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center -ml-2">
              <img 
                src="https://raw.githubusercontent.com/pragnyanramtha/phoos-/refs/heads/main/wide.png" 
                alt="Six Axis Studios logo" 
                className="h-6 sm:h-8 w-auto cursor-pointer transition-opacity hover:opacity-80 rounded-[0px]"
                onClick={() => handlePageChange('Home')}
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`relative text-lg font-medium transition-all duration-300 ${
                    currentPage === page 
                      ? 'text-primary after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:content-[""]' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-primary hover:text-primary/80 p-2"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="pt-20 pb-8 px-6">
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                    currentPage === page 
                      ? 'text-primary bg-primary/5 border-l-4 border-primary' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="text-center space-y-4">
                <Button 
                  onClick={() => handlePageChange('Contact')}
                  className="w-full"
                  size="lg"
                >
                  Book Discovery Call
                </Button>
                <div className="text-sm text-gray-500">
                  <p>6axisstudios@gmail.com</p>
                  <p>+91 63032 91867</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};