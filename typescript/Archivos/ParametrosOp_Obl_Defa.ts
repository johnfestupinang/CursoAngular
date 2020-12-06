(function(){//Funcion de anonimado o autoinvocada
    //USAR tsc -w o tsc --watch para compilar el archivo .ts
    //Parametros opcionales,obligatorios y por defecto

    /*
        Por recomendacion:
        Colocar los parametros en el siguiente orden
        1. Obligatorios
        2. Opcionales
        3. Por defecto
    */ 
   
    function activar(quien:string, momento?:string, objeto:string = 'la batiseñal'){ // (obligatorio, por defecto, opcional)
        if(momento){
        console.log(`${quien} activó ${objeto} en ${momento}`);
    }else{
        console.log(`${quien} activó ${objeto}`);

    }
}


    activar('Gordon','el carro','la tarde');
})();



