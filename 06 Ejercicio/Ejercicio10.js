const readLine = require ("readline-sync");
const randomNumber = Math.floor(Math.random() * 10) + 1;

let intentos = 0;
let aciertos = false;

while (aciertos == false){
    const num = parseInt(readLine.question("Introduce un número entre 1 y 10: "));

     if (isNaN(num)){
        console.log("No es un número.  Por favor, introduce un número válido."); 
        continue; // Salta  a la siguiente iteración del bucle.
     }
    intentos++
    if (num === randomNumber){
        console.log("¡Has acertado! El número ganador es: "+randomNumber);
        console.log("Intentos: " + intentos);
        aciertos = true;
    } else {
        console.log(" El número no es correcto. Intenta de nuevo.");

    }
}
console.log("El número era: " +randomNumber);
