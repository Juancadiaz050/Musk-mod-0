/** Implementa una función que, dado un texto con paréntesis, indique si dichos paréntesis están
 balanceados (se cierran todos los que se abren),
 Ejemplos:
 $> node ejercicio9.js
 Introduce un texto: (()(()))
 Están balanceados */
 function balanceados (pars){
    const stack = [];
    for (const single of pars) {
        if(single == '(') {
            stack.push(single);
        }
        if(single == ')'){
            if (stack.length ==0){
                return false;
            }
            stack.pop();
        }
        
    }
    return stack.length === 0;

 }
 console.log(balanceados("Implementa una función que, dado un (texto) con paréntesis, indique si dichos paréntesis) estánbalanceados (se cierran todos los que se abren)")); // -> false
 console.log(balanceados("Implementa una función que, dado un (texto) con paréntesis, indique si dichos (paréntesis) estánbalanceados (se cierran todos los que se abren)")); // -> true