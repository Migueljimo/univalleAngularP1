import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';

interface Product {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CardComponent, ShoppingCartComponent, FormsModule, CommonModule],
  providers: [ProductService],
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  searchQuery: string = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  //cart: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  search() {
    this.filteredProducts = this.products.filter(product =>
      product.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // onAddToCart(product: Product) {
  //   this.cart.push(product);
  //   console.log('Carrito:', this.cart);
  // }

  onAddToCart(product: Product) {
    this.productService.addToCart(product); //Agregar producto al carrito desde el servicio
  }



  goToDetail(id: number) {
    this.router.navigate(['/detalle', id]);
  }



  showCart = true;

  toggleCart() {
    this.showCart = !this.showCart;
  }
  
}
