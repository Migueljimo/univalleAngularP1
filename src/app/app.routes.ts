import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailMenuComponent } from './dashboard/pages/detail-menu/detail-menu.component';
import { ShoppingCartComponent } from './dashboard/pages/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detalle/:id', component: DetailMenuComponent },
    { path: 'carrito', component: ShoppingCartComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirección por defecto
  { path: 'shopping-cart', component: ShoppingCartComponent },
];
