import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';

const routes: Routes = [
  {
    path: '', 
    component: BienvenidoComponent
  },
  {
    path: 'bienvenidos', 
    component: BienvenidoComponent
  },
  {
    path: 'busquedaPelicula', 
    component: BusquedaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
