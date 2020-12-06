(() => {//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //Clases en TypeScript
    // class Avenger {
    //     nombre: string;
    //     equipo: string;
    //     nombreReal: string;

    //     puedePelear: boolean;
    //     peleasGanadas: number;

    //     constructor(nombre:string,equipo: string, nombreReal:string, puedePelear:boolean,peleasGanadas:number){
    //         this.nombre = nombre;
    //         this.equipo = equipo;
    //         this.nombreReal = nombreReal;
    //         this.puedePelear = puedePelear;
    //         this.peleasGanadas = peleasGanadas;
    //     }
    // }
    class Avenger {
        // nombre: string;
        // equipo: string;
        // nombreReal: string;

        // puedePelear: boolean;
        // peleasGanadas: number;

        constructor(public nombre:string,
            public equipo:string,
            public nombreReal?:string,
            public puedePelear:boolean = true,
            public peleasGanadas:number =0){

            }
            
        }

    const antman: Avenger = new Avenger('Atman','Capi'); //Instancia
    
    console.log(antman);

})();



