(() => {//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //Desestructuracion de objetos 
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán America',
        poder: 'Droga'
    }

    const extraer = (avenger: any) => {

        const { nombre, clave, poder } = avenger; //tomar el objeto avenger y extraer las propiedades, no importa el orden siempre cuendo sea un objeto, pueden ser todas la propiedades del objeto o no

        console.log(nombre);
        console.log(clave);
        //console.log(poder);

    }

    extraer(avenger);

    //Desestructuracion de arreglos

    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];


    const extraerArr = (avengers: string[]) => {
        const [thor, ironman, spiderman] = avengers; //defino las variables de la desestructuracion en ORDEN
        const [, , spiderman2] = avengers;
        console.log(thor, ironman, spiderman);
        console.log(spiderman2);
        //console.log(avengers[0],avengers[1],avengers[2]);
    }


   extraerArr(avengers);






})();



