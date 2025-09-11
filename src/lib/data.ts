import { Product } from '@/types/product'; // Importamos la interfaz Product

export const products: Product[] = [ // Definimos que 'products' es un array de tipo Product
  {
    id: '1',
    name: 'Sombrero de Dama yute ',
    description: 'Un sombrero tradicional, perfecto para cualquier ocasión para Dama .',
    price: 67.00,
    image: '/images/products/hat_market.jpg',
    category: 'Dama', // Añadimos la categoría
    featured: true,
  },
  {
    id: '2',
    name: 'Sombrero Indiana Elegante',
    description: 'Estilo explorador con un toque de elegancia.',
    price: 60.00,
    image: '/images/products/hat_garden.jpg',
    category: 'Caballero', // Añadimos la categoría
  },
  {
    id: '3',
    name: 'Sombrero de Marinero Dama',
    description: 'Ideal para tus días de sol y arena.',
    price: 55.00,
    image: '/images/products/hats_stacked.jpg',
    category: 'Dama', // Añadimos la categoría
    featured: true,
  },
  {
    id: '4',
    name: 'Sombrero Espiri',
    description: 'Un clásico reinventado en palma natural .',
    price: 70.00,
    image: '/images/products/hat_desert.jpg',
    category: 'Caballero', // Añadimos la categoría
  },
  
  
];