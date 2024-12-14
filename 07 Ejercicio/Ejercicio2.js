//Implementa una función que reciba por parámetro el radio de un círculo y que devuelva su área
const redLine = require('readline-sync');
const radio = parseFloat(redLine.question('Introduce el radio:'));

function radioCírculoPorÁrea(radio) {
    return Math.PI * Math.pow(radio, 2);

}
const área = radioCírculoPorÁrea(radio);
console.log(`El área del círculo es: ${área}`);
