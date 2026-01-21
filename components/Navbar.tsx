import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', value: Page.HOME },
    { label: 'Productos', value: Page.PRODUCTS },
    { label: 'Consulta & Reservas', value: Page.BOOKING },
    { label: 'Contacto', value: Page.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-fuxion-secondary p-2 rounded-full text-white">
                <Leaf size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold text-fuxion-primary tracking-tight">FuXion</span>
                <span className="text-xs block text-fuxion-accent uppercase tracking-widest font-semibold">Biotech</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.value
                    ? 'text-fuxion-primary font-bold bg-blue-50'
                    : 'text-gray-600 hover:text-fuxion-secondary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-fuxion-secondary hover:bg-green-600 text-white p-2 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">0</span>
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.value
                    ? 'text-fuxion-primary bg-blue-50'
                    : 'text-gray-600 hover:text-fuxion-secondary hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
