/** Implementa una función que reciba por parámetro un array de elementos e imprima por pantalla si
 todos los elementos son únicos en la lista u otra lista con los elementos repetidos en caso contrario.*/

let lista = ["uva", "manzana", "pera", "platano",];
function arrayÚnicos(lista) {
    let elementos = [];

    for (let i = 0; i < lista.length; i++) {
        if (elementos[lista[i]]) {
            console.log("Los elementos se repiten");
            return;
        }
        elementos[lista[i]] = true;
    }
    console.log("Los elementos son únicos");
}

arrayÚnicos(lista);

let lista2 = [1,2,2,3,4,5,6,6,8,9];
 function arryRepeat (lista2){
    let elemen = [];
    let repetidos = [];

    for (let i = 0; i < lista2.length; i++){
        if (elemen[lista2 [i]]){
            repetidos.push(lista2[i]);
        } else{
            elemen[lista2[i]] = true
        }
  }
  if (repetidos.length >0){
    console.log("Los elementos se repiten:" + repetidos.join(" / "));
  } else{ 
    console.log("Los elementos son únicos");
  }
  
 }
 arryRepeat(lista2);

