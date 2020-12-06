(() => {//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //Tipado del retorno de la funcion

    const sumar = (a:number, b:number):number => a+b;

    const nombre = ():string => 'Hola Fernando';

    const obtnerSalario = ():Promise<string> =>{
        return new Promise((resolve,reject) =>{
            resolve('Fernando');
        });
    }

    obtnerSalario().then(a => console.log(a.toUpperCase()));

})();

