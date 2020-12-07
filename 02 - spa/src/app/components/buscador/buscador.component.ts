import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';
import { Router } from '@angular/router'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
   heroes:any[] = [];
   termino:string = "";
  constructor(private _activatedRoute:ActivatedRoute, private heroService:HeroesService, private router:Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this.heroService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx:number){
    this.router.navigate( ['/hero',idx] );
  }

}
