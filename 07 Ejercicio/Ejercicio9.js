/**Implementa una función que reciba un número y devuelva una matriz cuadrada en la cual cada
 elemento es el producto de sus índices. */

function matrizCuadrada(n) {
  let matriz = []; // se crea una matriz vacia

  for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
      matriz[i][j] = i * j; 

    }
    console.log(matriz[i]);
  }

}
matrizCuadrada(3);
