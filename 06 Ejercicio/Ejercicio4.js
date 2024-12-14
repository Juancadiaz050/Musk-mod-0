const readLine = require('readline-sync');
const num = readLine.question("Introduce un número: ");

function tabla(num) { 
    let resultado = `tabla ${num}\n`;
    for ( let i = 1; i <= 10; i++) {
        let multiplicar = i * num;
        resultado = resultado + `${num} x ${i} = ${multiplicar}\n`;
    }
    return resultado;
    
}
console.log(tabla (num));