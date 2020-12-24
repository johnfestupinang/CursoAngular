import { mergeAnalyzedFiles } from '@angular/compiler';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const position = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const positionMax = (document.documentElement.scrollHeight || document.body.scrollHeight)

    if (position > positionMax){
      if ( this.peliculasService.cargando ){ return; }
     this.peliculasService.getCartelera().subscribe (
       movies => {
        this.movies.push(...movies);
       }
     );
    }

    //console.log({position, positionMax});
  } 

  constructor( private peliculasService:PeliculasService ) { }

  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(
      respuesta => {
        //console.log(respuesta.results);
        this.movies = respuesta;
        this.moviesSlideshow = respuesta;
      }
    );
  }

  ngOnDestroy(){
    this.peliculasService.resetCarteleraPage();
  }

}
