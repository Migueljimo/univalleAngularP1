import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// interface Product {
//   nombre: string;
//   precio: number;
// }

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
  searchQuery : string = '';
  // products : Product[] = [
  //   { nombre: 'Plato de la casa (PATO)', precio: 50 },
  //   { nombre: 'Lomo Montado', precio: 45 },
  //   { nombre: 'Medio Lomo', precio: 35 },
  //   { nombre: 'Chorrellana', precio: 50 },
  //   { nombre: 'Media Chorrellana', precio: 40 },
  //   { nombre: 'Bife Chorizo', precio: 65 },
  //   { nombre: 'Pique Macho', precio: 90 },
  //   { nombre: 'Milanesa de Lomo', precio: 45 },
  //   { nombre: 'Media de la Milanesa', precio: 35 },
  //   { nombre: 'Milanesa Picada', precio: 45 },
  //   { nombre: 'Milanesa de Pollo', precio: 45 },
  //   { nombre: 'Milanesa Napolitana', precio: 55 },
  //   { nombre: 'Chicharrón de Pollo', precio: 40 },
  //   { nombre: 'Jochi', precio: 75 },
  //   { nombre: 'Tatú', precio: 65 },
  //   { nombre: 'Pescado Surubí', precio: 50 },
  //   { nombre: 'Pescado Pacú', precio: 50 },
  //   { nombre: 'Almuerzo Familiar', precio: 22 },
  // ]
}
