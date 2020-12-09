import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán America';
  nombre2:string  = "JoHn FrEdY esTuPiÑaN gOmeZ";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario : number = 1234.5;
  fecha: Date = new Date();
  idioma :string = "es";
  videoUrl:string = 'https://www.youtube.com/embed/-bVBjUT10w8';
  activar:boolean = false;

  heroe = {
    nombre : 'Logan',
    clave : 'Wolverine',
    edad : 500,
    direccion : {
      calle: 'Primera',
      casa : 'B'
    }
  }

  valorPromesa = new Promise<string>( resolve =>{
    setTimeout(() =>{
      resolve("llego la data");
    },4500);
  })

  cambiarIdioma(idiomaSeleccionado:string){
    this.idioma = idiomaSeleccionado;
    console.log("Idioma Seleccionado: "+this.idioma);
  }
}
