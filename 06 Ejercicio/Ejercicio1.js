/* Escribe un programa que pida al usuario un número e imprima por pantalla si el número es par o
 impar y si es positivo o negativo. Si la entrada no es un número, se deberá pintar “No es un
 número”.*/
const readLine = require('readline-sync');
const num = readLine.question("Introduce un número: ");
if (isNaN(num)) {
    console.log("No es un número"); //Si no es un número, se imprime esto
} else if (num == 0) {
    console.log("El número es cero");//Si el número es 0, se imprime esto
} else {
    if (num % 2 == 0) {
        console.log("El número es par"); // Si el número es par, se imprime esto 
    } else {
        console.log("El númeor es impar"); // Si el número es impar, se imprime esto 
    }

    if (num > 0) {
        console.log("El número es positivo"); // Si el número es positivo, se impirme esto 
    } else {
        console.log("El número es negativo");// Si el número es negativo, se imprime esto 

    }
}   
