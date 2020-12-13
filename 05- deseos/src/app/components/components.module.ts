import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent
  ],
  exports: [//Todas las cosas que son propias de este modulo que se usan de forma externa
    ListasComponent
  ],
  imports: [
    CommonModule, // Trae el ngIf, ngFor, ngOnInit.. se deja si la vamos a usar
    IonicModule, 
    PipesModule

  ]
})
export class ComponentsModule { }
