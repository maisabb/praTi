const prompt = require ("prompt-sync")();

let matriz = [];

let a = prompt ("Por qual número a matriz deve ser multiplicada? ");

for (let i = 0; i < 6; i++){
    matriz[i] = [];
    for (let j = 0; j < 6; j++){
        matriz[i][j] = Math.floor(Math.random() * 20 + 1);
    }
}

console.log(matriz);

let vetor = [];

for (let i = 0; i < 6; i++){
    for (let j = 0; j < 6; j++){
        vetor.push (matriz[i][j] * a);
    }
}

console.log(vetor);