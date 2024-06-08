const prompt = require ("prompt-sync")();

let termo1 = parseFloat (prompt ("Qual o primeiro termo da PA?"));
let razao = parseFloat (prompt ("Qual a razão da PA?"));
let conta = 0;
let termos;

for (let i = 2; i <= 10; i++){
    termos = termo1 + ((i - 1) * razao);
    conta += termos;
    console.log ("O %d termo é %d", i, termos);
}

console.log ("A soma de todos os termos é %d", conta + termo1);