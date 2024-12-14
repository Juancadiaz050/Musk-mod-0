//Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a, e, i, o, u) en la cadena
const readLine = require ('readline-sync');
const text = readLine.question("Enter some text: ");


const textoVocales = ["a","e","i","o","u"];
let conteoVocales = 0;
for (let i = 0; i < text.length; i++) {
    if (textoVocales.includes(text[i].toLowerCase())) {
        conteoVocales++;

    }
 
} 
console.log("El número de vocales es:" + conteoVocales);

