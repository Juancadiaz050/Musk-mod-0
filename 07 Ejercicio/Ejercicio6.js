/**  Implementa una función que reciba un número n por parámetro y devuelva una matriz cuadrada n x
 n con números enteros consecutivos de izquierda a derecha y de arriba a abajo*/

 function matrizN(n){
    let matriz = [];
    let contador = 1;
    
    for (let i = 0; i < n; i++){
        let fila = [];

        for (j = 0;  j < n; j++){
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
        }
        return matriz;
 }
 let n = 3 // Numero recibido 
 let resultado = matrizN(n);
 console.log(resultado);