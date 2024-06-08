const prompt = require ("prompt-sync")();

let nome = [];

for (let i = 1; i <= 7; i++){
    nome[i]= prompt ("Digite o " + i + " nome: ");
}

for (let i = 7; i >= 1; i--){
    console.log(nome[i]);
}