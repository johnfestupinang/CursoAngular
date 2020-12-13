import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.mode';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList) lista: IonList //Se puede hacer de forma local, colocar el #ionList en el html, y en component.ts -> 'ionList'
  @Input() terminada = true;
  constructor( public  deseosService:DeseosService, private router:Router, private alertCrtl: AlertController ) { 
  }

  ngOnInit() {}

  listaSeleccionada( lista: Lista){
    if ( this.terminada ){
      this.router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
    }
  }

  borrarLista( listaBorrar: Lista){
    this.deseosService.borrarLista ( listaBorrar );
  }

  async editarNombreLista ( lista: Lista ){
    const alert = await this.alertCrtl.create({
      cssClass: 'my-custom-class',
      header: 'Editar lisya',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value:  lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
      {
        text:'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Cancelar");
          this.lista.closeSlidingItems(); //ViewChild
        }
      },
      {
        text : 'Actualizar',
        handler: ( data ) =>{
          console.log(data);
          if ( data.titulo.length == 0){
            return;
          }
         lista.titulo = data.titulo;
         this.deseosService.guardarStorage();
         this.lista.closeSlidingItems(); //ViewChild
        }
      },
    ]
    });

    alert.present();
  }

}
