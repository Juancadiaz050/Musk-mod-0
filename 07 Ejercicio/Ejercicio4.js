//Implementa una función que reciba por parámetro un array de números y que imprima por pantalla la suma y la media aritmética de sus elementos.

let listaDeNúmeros = [40,7,5,93,1,7];
function sumaArray (array){
let suma =  0;
 for (let i = 0; i < array.length; i++ ) {
    suma += array[i];
 }
 let media = suma / array.length;
 console.log("La suma del Array es: ",suma);
 console.log("La media es: ",media);
}
sumaArray(listaDeNúmeros); 
