import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre : 'Fredy',
    apellido : 'Estupiñan',
    correo: 'john@gmail.com',
    pais : 'COL',
    genero : 'M'
  }

  paises: any[] = [];

  constructor( private paisService:PaisService ) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( paises =>{
      this.paises = paises;
      this.paises.unshift({
        nombre: '[Seleccione Pais]',
        codigo: ''
      });
      //console.log(paises);
    } );
  }

  guardar( format:NgForm ){
   
    if ( format.invalid){
      Object.values( format.controls ).forEach( control =>{
        control.markAsTouched();
      });
      return;
    }

    console.log(format.value);
  }


}
