/**Implementa el algoritmo de ordenación 
quicksort y comprueba cuánto tarda en
 ejecutarse sobre un array de números aleatorios de tamaño 100.000 */

 function quicksort (array){
    if (array.length <= 1) {
        return array;
    }
    const pivote = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length  -1 ; i++) {
       if (array[i] < pivote) {
        left.push(array[i]);
        
       }else{
        right.push(array[i]);
       }
        
    }
    return [...quicksort(left), pivote, ...quicksort(right)];

 }
 
 const array = [];
 for (let i = 0; i < 100000; i++) {
   array.push(Math.floor(Math.random() * 100000));
 }
 const start = new Date();
 quicksort(array);
 const end = new Date();
 console.log(`El algoritmo quickSort ha tardado ${end - start} en ordenar 100000 elementos`);