import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-fuxion-dark text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FuXion Biotech</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuxion-secondary">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-fuxion-secondary">Nuestros Productos</a></li>
              <li><a href="#" className="hover:text-fuxion-secondary">Oportunidad de Negocio</a></li>
              <li><a href="#" className="hover:text-fuxion-secondary">Blog de Salud</a></li>
              <li><a href="#" className="hover:text-fuxion-secondary">Política de Privacidad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-fuxion-secondary">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-fuxion-primary" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-fuxion-primary" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-fuxion-primary" />
                <span>{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} FuXion Biotech. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};