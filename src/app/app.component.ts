import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente1Component } from "./componente1/componente1.component";
import { CardComponent } from './card/card.component';
import { TskManagerComponent } from './tsk-manager/tsk-manager.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Componente1Component, CardComponent, TskManagerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}
