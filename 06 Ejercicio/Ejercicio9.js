const readLine = require("readline-sync");
const num = readLine.question("Introduce un número (del 0 al 10): ");

function traducirNumeros(numero) {
    switch (numero) {
        case "0":
            console.log("zero");
            break;
        case "1":
            console.log("One");
            break;
        case "2":
            console.log("Two");
            break;
        case "3":
            console.log("Three");
            break;
        case "4":
            console.log("Four");
            break;
        case "5":
            console.log("Five");
            break;
        case "6":
            console.log("six");
            break;
        case "7":
            console.log("Seven");
            break;
        case "8":
            console.log("Eight");
            break;
        case "9":
            console.log("nine");
            break;
        case "10":
            console.log("Ten");
            break;
        default:
            console.log(" No es un número del rango (0-10): ");

    }
}
traducirNumeros(num);