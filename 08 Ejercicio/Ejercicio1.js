//Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto
function palabrasRepetidas(texto) {
    //Comvertimos el texto a minúsculas y separa las palabras
    const palabras = texto.toLowerCase().split(/[^a-záéíóúüñ]+/);

    //creamos un mapa para almacenar la cantidad de veces que aparece cada palabra
    const cuentaPalabras = new Map();

    //Contar las palabras
    palabras.forEach(palabra => {
        if (palabra) {
            cuentaPalabras.set(palabra, (cuentaPalabras.get(palabra) || 0) + 1);

        }
    });
    //filtrar las palabras que se repiten
    const repetidas = [];
    cuentaPalabras.forEach((conteo, palabra) => {
        if (conteo > 1) {
            repetidas.push(palabra);

        }
        

    }); 
    return repetidas; // devuelve las palabras repetidas
  }
   

const texto ="Recordar es fácil para quien tiene memoria, olvidar es difícil para quien tiene corazón"
const resultado = palabrasRepetidas(texto);
console.log(resultado);












