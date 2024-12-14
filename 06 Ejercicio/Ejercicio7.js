// Escribe un programa que reciba un número del usuario y pinte un triángulo de asteriscos cuya altura sea el número recibido

const readLine = require("readline-sync");
const num = parseInt(readLine.question("Introduce un número:")); 

function triangulo(altura){
for (let i = 1; i<= altura; i++){
    let espacios = ' ' .repeat(altura - i);// agrega espacios antes de los  asteriscos .
    let asteriscos = '*'.repeat(2 * i - 1);// agrega asteriscos en cada fila.
    console.log(espacios + asteriscos);
    
}

}
  triangulo(num);


// Nueva forma con asteriscos 
let n = 5;
for (let i = 1; i < n; i++){ 
  let f = ' ';
  for(let j = 1; j <= n; j++){
    if(j === i || j === n -1){
      f+='*';
    } else {
      f += ' ';
    }
  }
   console.log(f);
  }