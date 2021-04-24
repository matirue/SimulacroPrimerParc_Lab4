import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Pais } from 'src/app/class/pais';
import { PaisesService } from 'src/app/service/paises.service';

@Component({
  selector: 'app-actor-alta-formulario',
  templateUrl: './actor-alta-formulario.component.html',
  styleUrls: ['./actor-alta-formulario.component.css']
})
export class ActorAltaFormularioComponent implements OnInit {

  //datos del actor
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  nacionalidad: string = '';

  //prop de seleccionde pais, espera el valor de seleccionDePais del /actorAlta
  @Input()paisElegido!: Pais;

  public forma!: FormGroup;

  constructor(
    private pasies_service: PaisesService,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //armo las estructura del grupo
    this.forma = this.fb.group( { 
      'nombre': ['', [Validators.required, this.validadorEspacio]],
      'apellido': ['', [Validators.required, this.validadorEspacio]],
      'email': ['', [Validators.required, Validators.email]],
      'nacionalidad': ['', [Validators.required]],
      //'terminos': ['', Validators.required],
    });
  }

  /*
  GenerarrId(): number{
    return Math.random() * (999 - 0) + 0;
  }*/

  AltaDelActor(){
    //alert(this.forma?.getRawValue());
    console.log(this.forma.getRawValue());
    alert('mira la consola, no se donde hay q guardarlo');
  }

  private validadorEspacio(control:AbstractControl): null | object{
    const nombre = <string>control.value;
    const tieneEspacios = nombre.includes(' ');

    if(tieneEspacios){
      return { contiene:true };      
    }
    else{
      return null
    }
  }

}
