/** Implementa una función que reciba dos arrays de números
 *  y devuelva un array con los elementos que están en el primer array pero que no están en el segundo. Pruébala con valores aleatorios*/
// IMPRIMIRA [1,2,4]
const Array1=[1,2,3,4,5];
const Array2=[3,5];

function unicoArray (Array1,Array2){
   //.filter para quedarnos con los elementos del Array1 que no estan el en Array2
    return Array1.filter(elemento => !Array2.includes(elemento));

}
console.log(unicoArray(Array1,Array2)); //-> [1,2,4];








