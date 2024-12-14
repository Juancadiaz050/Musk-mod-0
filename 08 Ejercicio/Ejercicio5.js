/** Implementa una función que invierta el orden de una palabra usando una pila (stack).
 Ejemplo:
 Introduce una palabra: amor
 La palabra invertida es “roma”.
  */
 const redLine = require('readline-sync');
 const pa =redLine.question("Introduce una palabar:");
 function invertida (palabra){
    let stack = []; 
    for (let i = 0; i < palabra.length; i++) {
        stack.push(palabra[i]); 
    }
    let palabraInvertida = "";
    while (stack.length > 0) {
        palabraInvertida += stack.pop();

    }
    return palabraInvertida;
 }
 console.log("La palabra invertida es:",invertida(pa));