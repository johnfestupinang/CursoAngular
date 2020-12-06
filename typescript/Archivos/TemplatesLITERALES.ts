(function(){//Funcion de anonimado o autoinvocada

    function getEdad(){
        return 100+100+300;
    }

    //TEMPLATES LITERALES

    const nombre = 'Fernando';
    const apellido = 'Fernandez';
    const edad = 33;


    // Fernando Fernandez (Edad: 33)
    //const salida =  nombre +' '+apellido+ ' (Edad: '+edad+')';
    // Backtics ``
    const salida = `${nombre} ${apellido} (Edad: ${getEdad()} ${edad})`;
    console.log(salida);
})();



