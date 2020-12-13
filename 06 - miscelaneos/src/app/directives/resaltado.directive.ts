import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {


  constructor( private el:ElementRef) { 
    console.log("Directiva resaltado agregada");
    // el.nativeElement.style.backgroundColor = "red";
  }

@Input('appResaltado') nuevoColor:string;

  @HostListener('mouseenter') mouseEntro(){
    this.resaltar ( this.nuevoColor || 'yellow')
    console.log(this.nuevoColor);
    this.el.nativeElement.style.backgroundColor = "red";
  }

  @HostListener('mouseleave' || null) mouseSalio(){
    this.el.nativeElement.style.backgroundColor = null;

  }

  private resaltar (color: string){
    
    this.el.nativeElement.style.backgroundColor = color;
  }




}
