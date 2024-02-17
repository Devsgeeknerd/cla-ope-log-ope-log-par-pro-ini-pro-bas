// Operador lógico E ("&&").
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false); 

let x: number = 50;
console.log(x >= 18 && x <= 90); // true se x estiver entre 18 e 90, caso contrário, false


// Operador lógico OU ("||").
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

let y: number = 50;
console.log(y < 10 || y > 20); // true se y for menor que 10 ou maior que 20, caso contrário, false

// Operador lógico NÃO ("!").
console.log(!true);  
console.log(!false); 

// Observações:
// - O operador lógico NOT inverte o valor da expressão booleana.

// Geral:
// - Boas práticas incluem o uso de parênteses para garantir a ordem correta das operações lógicas.

