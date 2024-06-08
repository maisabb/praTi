const prompt = require ("prompt-sync")();

let matriz = [];
let soma = [];

for (let i = 0; i < 20; i++){
    soma[i] = 0;
}

for (let i = 0; i < 15; i++){
    matriz[i] = [];
    for (let j = 0; j < 20; j++){
        matriz[i][j] = Math.floor(Math.random() * 20 + 1);
    }
}

let j = 0;

while (j < 20){
    let c = 0;
    while (c < 15){
        soma[j] += matriz[c][j];
        c++;
    }
    j++;
}
    
console.log(matriz);

console.log (soma);