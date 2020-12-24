import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { catchError, map, tap } from 'rxjs/operators' // Dispara un efecto secundario
import { MovieDetails } from '../interfaces/movie-response';
import { Cast, CreditsResponse } from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor( private http:HttpClient ) { }

  get params() {
    return {
      api_key: '437e8769418454adbb2184f6a97ab06a',
      language: 'es-Es',
      page: this.carteleraPage.toString()

    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getCartelera():Observable<Movie[]>{

    if( this.cargando ){
      //cargando peliculas
      return of ([]); //transformando la respuesta con el operador of 
    }

    this.cargando = true;

    console.log("Llamando API");

   return this.http.get<CarteleraResponse>(`${ this.url }/movie/now_playing`, {
     params: this.params
   }).pipe(
     map ( (respuesta) => respuesta.results),
     tap( () => {
       this.carteleraPage +=1;
       this.cargando = false;
     })
   )
  }

  buscarPeliculas( texto:string ):Observable<Movie[]>{

    const params = {...this.params, page:'1', query:texto}
    //https://api.themoviedb.org/3/search/movie
    return this.http.get<CarteleraResponse>(`${ this.url }/search/movie`,{
      params: params
    }).pipe(
      map(
        res => res.results
      )
    )
  }

  getPeliculadetalle( id:string ){
    return this.http.get<MovieDetails>(`${ this.url }/movie/${ id }`,{
      params: this.params
    }).pipe(
      catchError( err => of (null))
    );
  }
  getCast( id:string ):Observable<Cast[]>{
    return this.http.get<CreditsResponse>(`${ this.url }/movie/${ id }/credits`,{
      params: this.params
    }).
    pipe(
      map( res => res.cast),
      catchError( err => of ([]))
    )
  }
}
