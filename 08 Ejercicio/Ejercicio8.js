/** Implementa una función que reciba un número y devuelva si dicho número es primo
 o no. */
function primos (number){
    if(number < 2){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0){
            return false;
        }
    
    }
    return true
}
const result = primos(2)
console.log("El numero es primo?:",result);
