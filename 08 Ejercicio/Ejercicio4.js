/**Escribe una función que reciba dos cadenas y verifique si son anagramas utilizando un Map.
 Ejemplo:
 $> node ejercicio4.js
 Introduce una palabra: amor
 Introduce otra palabra: roma
 Las palabras son anagramas. */
 const redLine = require('readline-sync');
 const palabra1 = redLine.question("Introduce una palabra:");
 const palabra2 = redLine.question("Introduce otra palabra:");
function chekAnagramas1(palabra1,palabra2) {
    if (palabra1.length !== palabra2.length){
        return false;
    }
    const contador = new Map();

    for (const char of palabra1) {
        contador.set(char,(contador.get(char)||0)+1);
    }
    
    for (const char of palabra2) {
        if(!contador.has(char)){
            return false; // Si no esta en el mapa
        }
        contador.set(char, contador.get(char) -1);
        if(contador.get(char) === 0){
            contador.delete(char);

        }
    }
    return contador.size === 0;
  
    
}
console.log("Son anagramas?",chekAnagramas1(palabra1,palabra2));