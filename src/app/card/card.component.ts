import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  mensaje: string = 'hi world!!!!!!!';
// Recibe un objeto de producto desde el componente padre
  @Input() product : any;
 // Emite un evento al hacer clic en el botón "Agregar al carrito"
  @Output() addToCart = new EventEmitter<any>();

  // Método para emitir el evento al hacer clic en el botón
  onAddToCart() {
    this.addToCart.emit(this.product);
  }
}
