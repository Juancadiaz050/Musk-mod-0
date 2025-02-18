const readLine = require("readline-sync");
const num = readLine.question("Enter a number: ");
const num1 = readLine.question("Enter another number: ");
const num2 = readLine.question("Enter another number: ");
 

function checkNumber(num) { //checkNuember 
   
    if (isNaN(num)) { 
        console.log("is not a number");
    } else if (num % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número no es par");
    
    }
}
checkNumber(num);
checkNumber(num1);  
checkNumber(num2);
