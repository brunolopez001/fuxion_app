import React, { useState } from 'react';
import { Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react';

export const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Consulta General',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calendar size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">¡Solicitud Recibida!</h2>
          <p className="text-gray-600 mb-6">
            Gracias {formData.name}, un asesor de FuXion te contactará pronto al número {formData.phone} para confirmar tu cita.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-fuxion-primary font-medium hover:underline"
          >
            Volver al formulario
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          <div className="bg-fuxion-primary p-10 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Agenda tu Asesoría</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Recibe un plan nutricional personalizado con nuestros productos. Nuestros expertos te guiarán para alcanzar tus metas de salud.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Calendar size={20} />
                  </div>
                  <span>Horarios flexibles</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <span>Asesores certificados</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MessageSquare size={20} />
                  </div>
                  <span>Seguimiento continuo</span>
                </div>
              </div>
            </div>

            <div className="mt-12 text-sm text-blue-200">
              * La consulta es gratuita por la compra de cualquier pack de productos.
            </div>
          </div>

          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    className="pl-10 block w-full rounded-lg border-gray-300 border p-3 focus:ring-fuxion-primary focus:border-fuxion-primary"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    className="pl-10 block w-full rounded-lg border-gray-300 border p-3 focus:ring-fuxion-primary focus:border-fuxion-primary"
                    placeholder="juan@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono / WhatsApp</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone size={18} className="text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    className="pl-10 block w-full rounded-lg border-gray-300 border p-3 focus:ring-fuxion-primary focus:border-fuxion-primary"
                    placeholder="999 888 777"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Interés</label>
                <select
                  className="block w-full rounded-lg border-gray-300 border p-3 focus:ring-fuxion-primary focus:border-fuxion-primary bg-white"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                >
                  <option>Bajar de Peso</option>
                  <option>Ganar Energía</option>
                  <option>Mejorar Piel/Cabello</option>
                  <option>Oportunidad de Negocio</option>
                  <option>Otro</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-fuxion-secondary hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                Solicitar Contacto
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};