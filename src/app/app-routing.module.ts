import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { ActorAltaComponent } from './component/actor/actor-alta/actor-alta.component';

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
  },
  {
    path: 'altaActores', 
    component: ActorAltaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
