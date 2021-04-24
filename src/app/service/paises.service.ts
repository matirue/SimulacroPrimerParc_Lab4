import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private paisActual?: string;

  constructor(private http: HttpClient) {
    this.paisActual = 'jkhhkjhj';
  }

  //lee paises desde el service
  getPaisActual(): string | undefined{
    return this.paisActual;
  }

  //setea un pais desde el service
  setPaisActual(dato: string){
    this.paisActual = dato;
  }

  //lee todos los paises desde el url
  getTodosLosPaises(){
    //return this.http.get("https://restcountries.eu/rest/v2/all");
    //return this.http.get("https://restcountries.eu/rest/v2/region/americas");
    return this.http.get("https://restcountries.eu/rest/v2/regionalbloc/usan");
  }
}
