/**miplementa el algoritmo de ordenación bubble sort y comprueba cuánto tarda en ejecutarse sobre un
 array de números aleatorios de tamaño 100.000.
 Ejemplo:
 $> node ejercicio6.js
 El algoritmo bubble sort ha tardado 12 segundos en ordenar 100000 elementos */
 function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
        
      }
    }
    return array;
 }
 const array = [];
 for (let i = 0; i < 100000; i++) {
   array.push(Math.floor(Math.random() * 100000));
 }
 const start = new Date();
 bubbleSort(array);
 const end = new Date();
 console.log(`El algoritmo bubble sort ha tardado ${end - start} en ordenar 100000 elementos`);