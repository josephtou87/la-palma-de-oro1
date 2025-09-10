export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string; // Añadido para los filtros
  featured?: boolean; // Opcional, para productos destacados
}