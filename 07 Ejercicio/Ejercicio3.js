//Implementa una función que reciba por parámetro el radio de un círculo y que pinte por pantalla lacircunferencia y el área del círculoconst 
const redLine = require('readline-sync');
const num = parseFloat(redLine.question('Introduce el radio:'));

function circunferencia(radio){
    return 2 * Math.PI * radio;
}
const resultadoCircunferencia = circunferencia(num);
console.log(`La longitud de la circunferencia es: ${resultadoCircunferencia}`);

 function circuÁrea (radio){
    return Math.PI * Math.pow(radio,2);
 }
  const resultadoÁrea = circuÁrea(num);
console.log(`El área del círculo es: ${resultadoÁrea}`);
