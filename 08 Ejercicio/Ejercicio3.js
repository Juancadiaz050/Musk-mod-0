/**Implementa una función que reciba una cadena y devuelva un Map con la frecuencia de cada carácter
 en la cadena (las veces que se repite).
 Ejemplo:
 $> node ejercicio3.js
 Introduce un texto: Hola mundo
 Mapa de frecuencias:
 Map { 'h' => 1, 'o' => 2, 'l' => 1, 'a' => 1, ' ' => 1, 'm' => 1, 'u' => 1, 'n'
 => 1, 'd' => 1 } */
 const redLine = require('readline-sync');
 const te = redLine.question("Introduce un texto:");
 function frecuencia (texto){
    const frecuencias = {};
    for (const elemento of texto){
   
    if (frecuencias[elemento]){
        frecuencias[elemento]++;
    } else{
        frecuencias[elemento]=1;
    }  
  }
  return frecuencias;
    
 } 
console.log("Frecuencia de carracteres:",frecuencia(te));