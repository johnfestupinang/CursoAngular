import { Component, OnInit, Input , Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {}
  @Input() idx: number = -1;

  @Output() heroeSeleccionado: EventEmitter<number> ;
  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
    
  }

  verHeroe(){
    this.router.navigate( ['/hero',this.idx] );
    // this.heroeSeleccionado.emit(this.idx); // COMO FUNCIONA EL OUTPUT
  }

}
