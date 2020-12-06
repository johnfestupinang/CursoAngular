(() => {//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //INTERFACES

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;

    }


    const enviarMision = (xmen:Xmen) =>{
        console.log(`Enadiando a: ${xmen.nombre} a la misión.`);
    }

    const regresarAlCuartel = (xmen:Xmen) =>{
        console.log(`Enadiando a: ${xmen.nombre} a la misión.`);
    }


    const wolverine:Xmen = {
        nombre: 'Logan',
        edad: 30
    }


    enviarMision(wolverine);

    regresarAlCuartel(wolverine);


})();



