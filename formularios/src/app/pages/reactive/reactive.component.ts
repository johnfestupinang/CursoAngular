import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidadoresService } from 'src/app/services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private formBuilder: FormBuilder, private validadores:ValidadoresService ) { 
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListeners();
  }

  ngOnInit(): void {
  }

 

  crearFormulario(){
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]], //['valor por defecto','validadores soincronos','validadores asincronos']
      apellido: ['', [Validators.required, Validators.minLength(5), this.validadores.noHerrera]],
      correo: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      usuario: ['', ,this.validadores.existeUsuario],
      pass1: ['',Validators.required],
      pass2:['',Validators.required],
      direccion: this.formBuilder.group({
        distrito: ['',Validators.required],
        ciudad: ['',Validators.required]
      }),
      pasatiempos: this.formBuilder.array([])
    },
    {
      validators: this.validadores.passwordsIguales('pass1','pass2')
    });
  }

  crearListeners(){
    // this.forma.valueChanges.subscribe( valor =>{
    //   console.log(valor);
    // } );

    // this.forma.statusChanges.subscribe ( status => console.log({status}));

    this.forma.get('nombre').valueChanges.subscribe( console.log );
  }

  cargarDataAlFormulario(){
   // this.forma.setValue({
    this.forma.reset({
      nombre: 'Juanito',
      apellido: 'Lopez',
      correo: 'juan@gmail.com',
      direccion: {
        distrito: 'Cundinamarca',
        ciudad: 'Bogota'
      }
    })
  }

  agregarPasatiempo(){
    this.pasatiempos.push( this.formBuilder.control(''));
  }

  borrarPasatiempo( posicion:number){
    this.pasatiempos.removeAt(posicion);
  }

  guardar(){

    if ( this.forma.invalid){
      return Object.values( this.forma.controls ).forEach( control =>{
        if ( control instanceof FormGroup){
           Object.values( control.controls ).forEach( controlR => controlR.markAsTouched() );
        }else{
          control.markAsTouched();
        }
      });
    } 
    console.log( this.forma );

    //Posteo de informacion -> Envio de la info a Bd o por medio del server
    this.forma.reset({

    });
  }

  /*************************** VALIDACIONES ****************************** */
  get nombreNoValido(){
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched
  }

  get apellidoNoValido(){
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched
  }

  get correoNoValido(){
    return this.forma.get('correo').invalid && this.forma.get('correo').touched
  }

  get usuarioNovalido (){
    return this.forma.get('usuario').invalid && this.forma.get('usuario').touched
  }
  get distritoNoValido(){
    return this.forma.get('direccion.distrito').invalid && this.forma.get('direccion.distrito').touched
  }
  get ciudadNoValido(){
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched
  }

  get pasatiempos(){
    return this.forma.get('pasatiempos') as FormArray ;
  }

  get pass1NoValido(){
    return this.forma.get('pass1').invalid && this.forma.get('pass1').touched
  }
  get pass2NoValido(){
    //Objeniedo valores
    const pass1 = this.forma.get('pass1').value;
    const pass2 = this.forma.get('pass2').value;
    return ( pass1 === pass2 ) ? false : true;
  }
}
