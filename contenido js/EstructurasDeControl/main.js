'use strict';

//------------Son contenedores
let numero1 = 3;
let numero2 = 100;

//Estructuras de control
//Podemos anidar estas estructuras de control
if((numero1 > 10) && (numero1>0)){
    console.log('Es mayor a 10');
}else{

    if(numero1 % 2 == 0){

    }else{

    }
    console.log('')

}

//Ternario
let respuesta = (numero2 % 10 === 0) ? "Es multiplo de 10": "No es multiplo de 10";
console.log(respuesta);

//------------------------------------------------------------------------------------------------------------------------------------------
//Esructura de control cuando sabemos los valores uqe pueda tener la variable
//Switch


let opcion = 3;
switch (opcion){
    case 1:
        console.log("Es el número 1");
        break;
    
    case 2:
        console.log("Es el número 2");
        break;

    case 3:
        console.log("Es el número 3")
        break;

    default:
        console.log("Opcion fuera de rango")
}

//Switch por rangos
let nota = 3.5;
switch (true){
    case nota >= 0 && nota <3.0:
        console.log("Aplazado");
        break;
    
    case nota >=3 && nota <= 5.0:
        console.log("Aprobado")
        break;

    default:
        console.log("Nota fuera de rango de calificación");
}