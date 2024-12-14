//Implementa una función que reciba por parámetro el radio de un círculo y que devuelva la longitud de la circunferencia.
const redLine = require('readline-sync');
const longitud = parseFloat(redLine.question('Introduce la longitud:'));

function calculaLongitudCircunferencia(radio) {
   return 2 * Math.PI * radio;
}
const resultado = calculaLongitudCircunferencia(longitud);
console.log(`La longitud de la circunferencia es ${resultado}`);
