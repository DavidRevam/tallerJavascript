'use strict'
//1. Pedri 2 números positivos y realizar una suma. Retornar el valor.

//ds Es la suma.
//de: 2 numeros positivos.


//operación
const sumar = (num1, num2) =>{
    const response = (num1>0 && num2>0)? num1+num2: "No se puede realizar la suma";
    return response;
}
//parce y cambiar a un tipo de valor entero, decimal o caracteres
let num1 = parseFloat (prompt('Dame el primer valor: '));
let num2 = parseInt (prompt('Dame el segundo valor'));

let suma = sumar(num1, num2);
alert(suma);


//1. Dado 2 numeros ingresados al usuario, realizar la 4 operaciones basicas 
/*e imprimirlas, validar la division entre 0 
2. Calcular el sueldo 
*/
