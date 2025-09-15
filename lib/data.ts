// Asegúrate de que esta interfaz esté definida y EXPORTADA en este archivo
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

// Tu array de productos debería usar esta interfaz
export const products: Product[] = [
  {
    id: '1',
    name: 'Sombrero Clásico de Paja',
    description: 'Elegante sombrero de paja tejido a mano, perfecto para el verano.',
    price: 45.00,
    image: '/images/sombrero1.jpg',
    category: 'Paja'
  },
  {
    id: '2',
    name: 'Sombrero Fedora de Fieltro',
    description: 'Un clásico atemporal, ideal para cualquier ocasión formal o casual.',
    price: 75.00,
    image: '/images/sombrero2.jpg',
    category: 'Fieltro'
  },
  {
    id: '3',
    name: 'Gorro de Lana Artesanal',
    description: 'Cálido y cómodo gorro de lana, tejido con técnicas tradicionales.',
    price: 30.00,
    image: '/images/sombrero3.jpg',
    category: 'Lana'
  },
  {
    id: '4',
    name: 'Sombrero de Vaquero Cuero',
    description: 'Resistente sombrero de cuero, estilo vaquero auténtico.',
    price: 90.00,
    image: '/images/sombrero4.jpg',
    category: 'Cuero'
  },
  {
    id: '5',
    name: 'Sombrero de Playa Ala Ancha',
    description: 'Protección solar máxima con estilo, ideal para tus días de playa.',
    price: 50.00,
    image: '/images/sombrero5.jpg',
    category: 'Paja'
  },
  {
    id: '6',
    name: 'Boina Francesa de Algodón',
    description: 'Un toque chic y sofisticado para tu atuendo diario.',
    price: 35.00,
    image: '/images/sombrero6.jpg',
    category: 'Algodón'
  },
  {
    id: '7',
    name: 'Sombrero Panamá Original',
    description: 'El auténtico sombrero Panamá, ligero y transpirable.',
    price: 120.00,
    image: '/images/sombrero7.jpg',
    category: 'Paja'
  },
  {
    id: '8',
    name: 'Sombrero de Copa Elegante',
    description: 'Para eventos especiales, un sombrero que denota distinción.',
    price: 150.00,
    image: '/images/sombrero8.jpg',
    category: 'Fieltro'
  },
  {
    id: '9',
    name: 'Visera Deportiva Ajustable',
    description: 'Ideal para actividades al aire libre, con ajuste cómodo.',
    price: 20.00,
    image: '/images/sombrero9.jpg',
    category: 'Deportivo'
  },
  {
    id: '10',
    name: 'Sombrero de Sol Plegable',
    description: 'Práctico y fácil de llevar, perfecto para viajes.',
    price: 40.00,
    image: '/images/sombrero10.jpg',
    category: 'Paja'
  }
];