import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BienvenidoComponent } from './pages/bienvenido/bienvenido.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { TablaPeliculaComponent } from './component/tabla-pelicula/tabla-pelicula.component';
import { DetallePeliculaComponent } from './component/detalle-pelicula/detalle-pelicula.component';
import { PeliculaAltaComponent } from './component/peliculas/pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './component/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './component/actor/actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './component/peliculas/pelicula-listado/pelicula-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
