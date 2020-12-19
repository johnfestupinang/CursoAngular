import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apikey = "AIzaSyD0Bjqx-v85RCdNsMz1uSy_VADbUyEbEAA";
  userToken: string;

  //Crear nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// Iniciando sesion
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor( private http: HttpClient ) { 
    this.leerToken();
  }

  logOut(){
    localStorage.removeItem('token');

  }

  logIn( usuario:UsuarioModel){
    const authdata = {
      ...usuario,
      // email: usuario.email,
      // password: usuario.password,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.apikey }`,authdata
      ).pipe(
        map( resp =>{
          console.log("Entro en el mapa del RXJS LogIn")
          this.guardarToken(resp['idToken']);
          return resp;
      } )
    );
  }

  nuevoUsuario( usuario:UsuarioModel){
      const authdata = {
        ...usuario,
        // email: usuario.email,
        // password: usuario.password,
        returnSecureToken: true
      };

      return this.http.post(
      `${ this.url }signUp?key=${ this.apikey }`,
      authdata
      ).pipe(
        map( resp =>{
          console.log("Entro en el mapa del RXJS nuevoUsuario")
          this.guardarToken(resp['idToken']);
          return resp;
      } )
    );
  }

  private guardarToken( idToken:string){
    this.userToken = idToken;
    localStorage.setItem('token',idToken);

    let hoy = new Date();
    hoy.setSeconds( 3600 );

    localStorage.setItem('expira',hoy.getTime().toString());
  }

  leerToken(){

    if( localStorage.getItem('token') ){
      this.userToken = localStorage.getItem('token') ;
    }else{
     this.userToken = ''; 
    }

    return this.userToken;
  }

  estaAutenticado():boolean{
    if ( this.userToken.length < 2){
      return false;
    }

    const EXPIRACION = Number(localStorage.getItem('expira'));

    const FECHA_EXPIRACION = new Date();
    FECHA_EXPIRACION.setTime(EXPIRACION);

    if ( FECHA_EXPIRACION > new Date() ){
      return true;
    }else{
      return false;
    }
  }
}
