import { Product } from '@/types/product'; // Importamos la interfaz Product

export const products: Product[] = [ // Definimos que 'products' es un array de tipo Product
  {
    id: '1',
    name: 'Sombrero Clásico de Palma',
    description: 'Un sombrero tradicional, perfecto para cualquier ocasión.',
    price: 35.00,
    image: '/images/sombrero-clasico.jpg',
    category: 'Clásicos', // Añadimos la categoría
    featured: true,
  },
  {
    id: '2',
    name: 'Sombrero Vaquero Elegante',
    description: 'Estilo vaquero con un toque de elegancia.',
    price: 55.00,
    image: '/images/sombrero-vaquero.jpg',
    category: 'Vaqueros', // Añadimos la categoría
  },
  {
    id: '3',
    name: 'Sombrero de Playa Trenzado',
    description: 'Ideal para tus días de sol y arena.',
    price: 28.00,
    image: '/images/sombrero-playa.jpg',
    category: 'Playa', // Añadimos la categoría
    featured: true,
  },
  {
    id: '4',
    name: 'Sombrero Fedora de Palma',
    description: 'Un clásico reinventado en palma natural.',
    price: 48.00,
    image: '/images/sombrero-fedora.jpg',
    category: 'Clásicos', // Añadimos la categoría
  },
  {
    id: '5',
    name: 'Sombrero de Sol Ala Ancha',
    description: 'Máxima protección solar con estilo.',
    price: 40.00,
    image: '/images/sombrero-ala-ancha.jpg',
    category: 'Playa', // Añadimos la categoría
  },
  {
    id: '6',
    name: 'Sombrero de Charro Miniatura',
    description: 'Adorno decorativo, réplica de sombrero de charro.',
    price: 20.00,
    image: '/images/sombrero-charro.jpg',
    category: 'Clásicos', // Añadimos la categoría
    featured: true,
  },
];