const prompt = require ("prompt-sync")();

let vetor = [];

let num1 = 0, num2 = 1, prox;

for (let i = 0; i <= 15; i++){
    vetor[i] = num1;
    console.log(vetor[i]);
    prox = num1 + num2;
    num1 = num2;
    num2 = prox;
}