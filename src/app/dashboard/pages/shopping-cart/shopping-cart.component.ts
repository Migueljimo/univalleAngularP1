import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';

interface Product {
  id: number;
  nombre: string;
  precio: number;
}

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})


export class ShoppingCartComponent {

  cart : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit() {
    // ------------------ Escuchar cambios en el carrito ------------
    this.productService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  onAddToCart(product: Product) {
    this.cart.push(product);
    console.log('Carrito:', this.cart);
  }



  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.precio, 0);
  }
}
