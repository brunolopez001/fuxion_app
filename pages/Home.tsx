import React from 'react';
import { Page } from '../types';
import { ArrowRight, ShieldCheck, Zap, Heart } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-fuxion-primary overflow-hidden">
        {/* Abstract shapes background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-fuxion-secondary blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-fuxion-secondary font-bold text-sm mb-6 backdrop-blur-sm border border-white/10">
              Biología y Tecnología en Sinergia
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Tu Salud al Siguiente Nivel con <span className="text-fuxion-secondary">FuXion</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Bebidas nutracéuticas 100% naturales, sin azúcar, que mejoran tu vida física, emocional y financiera. Recupera tu energía hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate(Page.PRODUCTS)}
                className="bg-fuxion-secondary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-green-600 hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
              >
                Ver Productos <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate(Page.BOOKING)}
                className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Asesoría Gratuita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-50 text-fuxion-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Clean Label</h3>
            <p className="text-gray-500">
              Ingredientes 100% naturales. Sin químicos, sin OGM, sin azúcar ni conservantes artificiales.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-green-50 text-fuxion-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Biotecnología</h3>
            <p className="text-gray-500">
              Principios activos extraídos del corazón de la Amazonía, potenciados por ciencia moderna.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-teal-50 text-fuxion-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">Salud Integral</h3>
            <p className="text-gray-500">
              Soluciones para control de peso, vigor mental, deporte, edad y sistema inmunológico.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No sabes por dónde empezar?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Nuestro Agente de Voz con IA puede ayudarte a encontrar el producto perfecto para tus necesidades en menos de 2 minutos.
          </p>
          <button 
             onClick={() => document.querySelector<HTMLButtonElement>('button[title="Hablar con Agente de Voz"]')?.click()}
             className="inline-flex items-center gap-3 bg-fuxion-primary px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-colors"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            Hablar con Asistente
          </button>
        </div>
      </section>
    </div>
  );
};