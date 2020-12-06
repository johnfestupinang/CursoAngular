(function(){//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //FUNCIONES FLECHA

    const miFuncion = function( a:string){
        return a;
    }

    //Funciones en forma Funcion de flecha, este ejemplo es porque solo tiene una linea
    const miFuncionF = (a:string ) => a.toUpperCase();

    const sumarN = function (a:number, b:number){
        return a+b;
    }

    const SumarF = (a:number, b:number) => {
        return a+b;
    }
    
    console.log("Mi funcion NORMAL: "+sumarN(5,6));
    console.log("Mi funcion FECHA: "+sumarN(5,6));


    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash...!!!!! `);
            },1000);
            
        }
    }

    hulk.smash();

})();



