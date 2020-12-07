import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.services';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent  {

  heroe:any = {};

  constructor(private activatedRoute:ActivatedRoute, private heroService:HeroesService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe = this.heroService.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }

 

}
