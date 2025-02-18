/** Ejercicio 10
 Implementa una función que verifique si una secuencia de paréntesis, corchetes,
 y llaves es válida. 
Es decir, se abren tantos como se cierran y cada secuencia está siempre
 contenida. */



 
 function validarParéntesis(par) {
    let stack = [];
    for (let i = 0; i < par.length; i++) {
        if (par [i]=== ' '){
            continue;
        }
        if (par[i] === '('|| par[i] === '{' || par[i] === '[') {
            stack.push(par[i]);
        } else{
            if ( stack.length <= 0) {
                return false;
                
            }
            let las = stack.pop();
            if (par[i] ===')' && las !== '(') {
                return false; 
                
            }
            if (par[i] ==='}' && las !== '{') {
                return false; 
                
            }
            if (par[i] ===']' && las !== '[') {
                return false; 
                
            }

        }
        
    }
    return stack.length === 0; 
    
 }
 console.log(validarParéntesis('(){}[]')); // true
 console.log(validarParéntesis('([{}])')); // true
 console.log(validarParéntesis('(]')); // false
 console.log(validarParéntesis('({[)]}')); // false