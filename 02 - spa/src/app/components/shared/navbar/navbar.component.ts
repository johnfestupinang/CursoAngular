import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    console.log(termino);
    this._route.navigate(['/buscar',termino]);
  }

}
