const readLine = require('readline-sync');
const ancho = readLine.questionFloat("Introduce la base:");
const alto = readLine.questionFloat("Introduce la altura:");

function calculaRectangulo(ancho, alto) {
    let resultado = '';
// Verifica si las dimensiones son válidas
    if (ancho < 1 || alto < 1) {
        return;
    }
    if (ancho === 1) { // Caso ancho 1
        for (let i = 0; i < alto; i++) {
            resultado += '*' + '\n';
        }

        return resultado;
    }
// línea del rectángulo(superior)
    resultado += '*'.repeat(ancho) + '\n';
// líneas huecas 
    for (let i = 0; i < alto - 2; i++) {
        if (ancho > 1) {
            resultado += '*' + ' '.repeat(ancho - 2) + '*' + '\n';
        } else {
            resultado += '*' + '\n';
        }
    }
    // parte inferiro 
    if (alto > 1) {
        resultado += '*'.repeat(ancho) + '\n';
    }
    return resultado;
}
console.log(calculaRectangulo(ancho, alto));   