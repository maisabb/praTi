const prompt = require ("prompt-sync")();

let num;
let conta = 0, contador = 0;

while ((num = parseFloat(prompt())) != 0){
    conta += num;
    contador++;
}

let media = conta/contador;

console.log (media.toFixed(1));