(() => {//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //PROMESAS _2-> Ejecutar el codigo "sin bloquear el codigo"

    const retirarDinero = (montoRetirar:number): Promise<string> => {
        let dineroActual = 1000;


        return new Promise((resolve,reject) =>{
            if(montoRetirar > dineroActual){
                reject('No hay suficientes fondos');
            }else{
                dineroActual -= montoRetirar;
                resolve('Dinero Actual: '+dineroActual); 
            }
        });
    }


    retirarDinero(1500)
        .then(montoActual => console.log(`${montoActual}`))
        .catch(err => console.warn(err));




})();



