const readLine = require ("readline-sync");
const año =  parseInt(readLine.question("Introduce un año para saber si es bisiesto :"));

function añoBisiesto (año) {
    if ((año % 4 === 0 && año % 100 !== 0)|| (año % 400 === 0)) {
        console.log("Es bisiesto");
        
    } else {
        console.log ("No es bisiesto");

    } 
    }
    añoBisiesto(año);