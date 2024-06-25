const prompt = require ("prompt-sync")();

let num = prompt ("Quantos termos? ");
let num1 = 0, num2 = 1, prox;

for (let i = 0; i <= num; i++){
    console.log(num1);
    prox = num1 + num2;
    num1 = num2;
    num2 = prox;
}