import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { Cast } from 'src/app/interfaces/credits-response';
import { MovieDetails } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie: MovieDetails;
  public cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService,
    private location: Location, private router: Router) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    combineLatest([

      this.peliculasService.getPeliculadetalle(id),
      this.peliculasService.getCast(id)

    ]).subscribe(([pelicula, cast]) => {
      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.movie = pelicula;
      this.cast = cast.filter( actor => actor.profile_path != null);
    })


    // this.peliculasService.getPeliculadetalle( id ).subscribe(
    //   movie => {
    //     if ( !movie ){
    //       this.router.navigateByUrl('/home');
    //       return;
    //     }
    //     // console.log(movie);
    //     this.movie = movie;
    //   }
    // );

    // this.peliculasService.getCast( id ).subscribe(
    //   cast => {
    //     console.log(cast)
    //     this.cast = cast.filter( actor => actor.profile_path != null);
    //   }
    // );
  }

  onRegresar() {
    this.location.back();
  }

}
