function imprimirConsola(constructorClase: Function){
    console.log(constructorClase);
}

@imprimirConsola //Decorador de clase, añade y expande la clase añadiendo funcionalidades
export class Xmen {
    constructor(public nombre:string,
        public clave:string){

        }

    imprimir(){
        console.log(`${ this.nombre} - ${this.clave}`);
    }
}