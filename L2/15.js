const prompt = require ("prompt-sync")();

let vetor = [];

for (let i = 1; i <= 10; i++){
    vetor[i] = parseFloat (prompt ("Digite o " + i + " número: "));
}

for (let i = 1; i <= 10; i++){
    if (vetor[i] % 2 == 0){
        console.log ("O número " + vetor[i] + " armazenado na posição " + i + " é par");
    }
}