import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componente1/componente1.component";
import { CardComponent } from './card/card.component';
import { TskManagerComponent } from './tsk-manager/tsk-manager.component';
import { CommonModule } from '@angular/common';


interface Product {
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';


  products : Product[] = [
    { nombre: 'Producto 1', precio: 100 },
    { nombre: 'Producto 2', precio: 200 },
    { nombre: 'Producto 3', precio: 300 },
    { nombre: 'Producto 4', precio: 400 },
    { nombre: 'Producto 5', precio: 500 },
    { nombre: 'Producto 6', precio: 600 },
    { nombre: 'Producto 7', precio: 700 },
    { nombre: 'Producto 8', precio: 800 },
    { nombre: 'Producto 9', precio: 900 },
    { nombre: 'Producto 10', precio: 1000 },
  ]
  cart : Product[] = [];
  
  onAddToCart(product: Product) {
    this.cart.push(product);
    console.log('Carrito:', this.cart);
  }
}
