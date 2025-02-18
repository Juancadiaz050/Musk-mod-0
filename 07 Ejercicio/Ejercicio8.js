/** Implementa una función que reciba un string y devuelva si es o no un palíndromo
 (independientemente de los espacios) */

 const redLine = require('readline-sync');
 let texto = redLine.question("Introduce un texto: ");

 function esPalindromo(texto){
    let array = texto.split(""); // convierte el texto en un array
    let reverse = array.reverse(); // invierte el array
    return texto === reverse.join("");


}
console.log(esPalindromo(texto));
esPalindromo(texto);


