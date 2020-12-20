import { Component, OnInit } from '@angular/core';
import { HeroeModel } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando: boolean = false;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.cargando = true;
    this.heroesService.getHeroes().subscribe( resp => 
      {
        this.heroes = resp 
        this.cargando = false;
      });
  }

  eliminarHeroe( heroe: HeroeModel, index:number ){

    Swal.fire({
      title: '¿Está seguro?',
      text: `¿Desea eliminar al heroe ${ heroe.nombre }?`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then( resp => {
      if ( resp.value ){
        this.heroes.splice(index,1);
        this.heroesService.eliminarHeroe( heroe.id ).subscribe();
      }
    })

  
  }

}
