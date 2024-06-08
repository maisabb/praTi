const prompt = require ("prompt-sync")();

let pessoa = [];
let idade = [];

for (let i = 1; i <= 9; i++){
    pessoa[i] = prompt ("Nome da pessoa " + i + ": ");
    idade[i] = parseInt (prompt ("Idade de " + pessoa[i] + ": "));
}

for (let i = 1; i <= 9; i++){
    if (idade[i] < 18){
        console.log (pessoa[i] + " é menor de idade.");
    }
}