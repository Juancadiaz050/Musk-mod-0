// Implementa una función que reciba una matriz como parámetro y devuelva la matriz traspuesta
let matriz = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8]
];
function matrizTranspusta(matriz){
    let transpuesta = [];
    
    for ( let i = 0; i < matriz[0].length; i++){
        transpuesta[i] = [];
        for (let j = 0; j < matriz.length; j++){
            transpuesta[i][j] = matriz[j][i]; 
    }
    console.log(matriz[i]);
    
      }
      return transpuesta;
    }
    let matrizTranspuesta = matrizTranspusta(matriz);   
    console.log(matrizTranspuesta);


