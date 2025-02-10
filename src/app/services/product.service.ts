import { Injectable } from '@angular/core';

interface Product {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, nombre: 'Plato de la casa (PATO)', precio: 50, descripcion: 'Delicioso plato especial de la casa con pato cocinado a la perfección.' },
    { id: 2, nombre: 'Lomo Montado', precio: 45, descripcion: 'Lomo jugoso servido con huevo frito y guarnición.' },
    { id: 3, nombre: 'Medio Lomo', precio: 35, descripcion: 'Media porción de lomo montado para un gusto más ligero.' },
    { id: 4, nombre: 'Chorrellana', precio: 50, descripcion: 'Carne jugosa acompañada de papas fritas, cebolla y huevo.' },
    { id: 5, nombre: 'Media Chorrellana', precio: 40, descripcion: 'Una porción más pequeña de nuestra tradicional Chorrellana.' },
    { id: 6, nombre: 'Bife Chorizo', precio: 65, descripcion: 'Corte grueso de bife chorizo, jugoso y bien sazonado.' },
    { id: 7, nombre: 'Pique Macho', precio: 90, descripcion: 'Plato tradicional con carne, papas, huevo y una mezcla de sabores intensos.' },
    { id: 8, nombre: 'Milanesa de Lomo', precio: 45, descripcion: 'Milanesa crujiente de lomo, servida con guarnición.' },
    { id: 9, nombre: 'Media de la Milanesa', precio: 35, descripcion: 'Media porción de milanesa de lomo, ideal para porciones más pequeñas.' },
    { id: 10, nombre: 'Milanesa Picada', precio: 45, descripcion: 'Milanesa de lomo cortada en trozos pequeños, perfecta para compartir.' },
    { id: 11, nombre: 'Milanesa de Pollo', precio: 45, descripcion: 'Clásica milanesa de pollo, crujiente y dorada.' },
    { id: 12, nombre: 'Milanesa Napolitana', precio: 55, descripcion: 'Milanesa con queso derretido, jamón y salsa de tomate.' },
    { id: 13, nombre: 'Chicharrón de Pollo', precio: 40, descripcion: 'Trozos de pollo crocantes y bien sazonados.' },
    { id: 14, nombre: 'Jochi', precio: 75, descripcion: 'Carne exótica de jochi, tierna y llena de sabor.' },
    { id: 15, nombre: 'Tatú', precio: 65, descripcion: 'Carne tradicional de tatú, preparada con especias locales.' },
    { id: 16, nombre: 'Pescado Surubí', precio: 50, descripcion: 'Filete de surubí a la parrilla, con un toque de limón.' },
    { id: 17, nombre: 'Pescado Pacú', precio: 50, descripcion: 'Pacú frito o a la parrilla, con una textura suave y sabrosa.' },
    { id: 18, nombre: 'Almuerzo Familiar', precio: 22, descripcion: 'Menú especial del día con guarniciones caseras.' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
