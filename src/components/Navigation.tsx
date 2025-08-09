import React from 'react';
import { Button } from './ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const pages = ['Home', 'About', 'Process', 'Services', 'Contact'];

  return (
    <nav className="bg-white/95 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://images.pexels.com/photos/33361857/pexels-photo-33361857.png" 
              alt="Six Axis Studios logo" 
              className="h-14 w-auto cursor-pointer transition-opacity hover:opacity-80 rounded-[0px]"
              onClick={() => onPageChange('Home')}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => onPageChange(page)}
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
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
                <div className="w-full h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};