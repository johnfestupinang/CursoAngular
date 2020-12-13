import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';
//import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FiltroCompletadoPipe],
  //No lo manejo porque no necesito usar alguna directiva como ngfor, nfIf ...
  // imports: [
  //   CommonModule
  // ]
  exports:[
    FiltroCompletadoPipe
  ]
})
export class PipesModule { }
