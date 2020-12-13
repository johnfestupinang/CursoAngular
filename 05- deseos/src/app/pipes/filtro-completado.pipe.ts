import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.mode';

@Pipe({
  name: 'filtroCompletado',
  pure: false //PIPE IMPURO -> cada vez que se dispare el ciclo detector de cambios de angular se va a dispara por lo generar esta en true
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean = true ): Lista[] {
    
    return listas.filter( listas => {
      return  listas.terminada === completada;
    }); 
    
    
  }

}
