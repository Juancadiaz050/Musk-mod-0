 const readLine = require ("readline-sync");
 const num = readLine.question("Enter a number: ");

 function calFactorial(number){ 
    let factorial = 1;
    for ( let i = 1; i <= number;  i++) {
        factorial *= i;
    }
    return factorial;

 }
 const result = calFactorial(num);
 console.log(`The factorial of ${num} is ${result}`);

 