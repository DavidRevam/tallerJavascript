'use strict'

//-------------------------------------------------------Declarar un arreglo.
//Son vistos como listas. Podemos incluir numeros valores boleanos, decimales, enteros.

const myArray = [2, 4, 6, 7, 8, 9, '3', true];
let myArray2 = new Array('1', '2', '3', '4', '5')


//for normal
for (let i=0; i< myArray.length; i++){
    console.log(myArray[i]);
}

//--------------------------------------------------------for in -------- For Of


//FOR IN (Toma poscicion)
for(let i in myArray2){
    console.log(myArray2[i]);
}

//FOR OF (Toma valor posicion)

for(let j of myArray2){
    console.log(j);
}

//---------------------------------------------------For Each
//()
myArray.forEach(e => {
     console.log(e);
 });

