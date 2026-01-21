import { Product } from './types';

export const COMPANY_INFO = {
  name: "FuXion Biotech",
  address: "Pje. Santa Mercedes 325 – Palao, San Martín de Porres, Lima, Perú",
  phone: "+51 1 555 1234",
  email: "contacto@fuxion-biotech.com",
  hours: "Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM",
  mission: "Mejoramos tu salud financiera, física y emocional a través de productos nutracéuticos únicos."
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Thermo T3',
    description: 'Delicioso té alimonado con efecto termogénico. Ayuda a quemar grasa de manera natural.',
    price: 135.00,
    category: 'Control de Peso',
    benefits: ['Acelera el metabolismo', 'Quema grasa', 'Eleva la energía'],
    image: 'https://picsum.photos/400/400?random=1'
  },
  {
    id: '2',
    name: 'Vita Xtra T+',
    description: 'Bebida funcional multivitamínica llena de antioxidantes y energía.',
    price: 140.00,
    category: 'Vigor Mental',
    benefits: ['Energía todo el día', 'Mejora rendimiento físico', 'Alto en antioxidantes'],
    image: 'https://picsum.photos/400/400?random=2'
  },
  {
    id: '3',
    name: 'Flora Liv',
    description: 'Cultivos probióticos que regeneran tu flora intestinal.',
    price: 125.00,
    category: 'Sistema Inmunológico',
    benefits: ['Mejora digestión', 'Refuerza inmunidad', 'Previene gastritis'],
    image: 'https://picsum.photos/400/400?random=3'
  },
  {
    id: '4',
    name: 'NoCarb-T',
    description: 'Inhibidor natural de carbohidratos. Mantiene niveles saludables de glucosa.',
    price: 135.00,
    category: 'Control de Peso',
    benefits: ['Controla azúcar', 'Reduce asimilación de carbohidratos', 'Previene diabetes'],
    image: 'https://picsum.photos/400/400?random=4'
  },
  {
    id: '5',
    name: 'Beauty In',
    description: 'Colágeno hidrolizado optimizado para la piel y articulaciones.',
    price: 150.00,
    category: 'Anti-Edad',
    benefits: ['Piel elástica', 'Cabello fuerte', 'Salud articular'],
    image: 'https://picsum.photos/400/400?random=5'
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Eres un Asistente de Ventas y Experto en Bienestar de FuXion Biotech. 
Tu objetivo es asesorar sobre productos nutracéuticos, resolver dudas y guiar hacia una compra o reserva de consulta.

INFORMACIÓN DEL NEGOCIO:
- Nombre: FuXion Biotech
- Dirección: ${COMPANY_INFO.address}
- Horario: ${COMPANY_INFO.hours}

CATÁLOGO DE PRODUCTOS (Usa esta información exacta, no inventes precios ni beneficios):
${JSON.stringify(PRODUCTS.map(p => `${p.name} (${p.category}): S/. ${p.price}. Beneficios: ${p.benefits.join(', ')}. Desc: ${p.description}`))}

REGLAS DE INTERACCIÓN:
1. Tono: Profesional, empático, entusiasta pero científico.
2. Anti-Alucinación: NUNCA inventes productos, precios o direcciones. Si no sabes algo, responde "Déjeme verificar esa información específica con un asesor humano" o sugiere agendar una llamada.
3. Seguridad: NO des consejos médicos. Si alguien menciona una enfermedad grave, recomienda consultar a su médico antes de tomar suplementos.
4. Conversión: Al final de tus respuestas, invita sutilmente a "Ver el catálogo", "Reservar una asesoría personalizada" o "Visitar nuestra tienda".
5. Estilo de respuesta: Breve, usa listas (bullets) si hay varios beneficios.

SI EL USUARIO QUIERE COMPRAR O RESERVAR:
- Pide amablemente su nombre y qué objetivo de salud tiene.
- Guíalo a la sección de "Reservar Consulta" o "Productos".
`;
