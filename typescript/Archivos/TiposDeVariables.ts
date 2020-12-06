(function(){//Funcion de anonimado o autoinvocada
    // las variables tipo let me sirven para definirlas localmente, no permite definir una variable con el mismo nombre
    // las variables de tipo var se definen para usarlas globalmente
   
    //COMPILAR CON tsc --w o tsc --watch

   //const URL_SERVICIOS = 'Contante'; //Las constantes se definen en mayusculas y no consumen espacio en memoria

    let mensaje : string = 'Hola';
    let numero: number  = 123;
    let booleano: boolean = true;
    let hoy : Date = new Date(); //Vatriable igual a un objeto, en este caso Date es una funcion contructora
    let cualquiercosa; //si no especifico el tipo de dato es ANY

    cualquiercosa = mensaje;
    cualquiercosa = hoy;
    
    //Variable tipo objeto
    let spiderman = {
        nombre: 'Peter',
        edad: 30
    };
 
})();



