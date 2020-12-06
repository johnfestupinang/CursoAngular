(() => {//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //PROMESAS -> Ejecutar el codigo "sin bloquear el codigo"

    console.log('Inicio');

    const prom1 = new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            resolve('se terminó el timeOut');
        },1000);
    });

    prom1.then(mensaje => console.info(mensaje))
    .catch( err => console.warn(err));


    console.log('Fin');

})();



