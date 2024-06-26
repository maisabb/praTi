const prompt = require("prompt-sync")();

let a = prompt ("Qual o número? Se corresponder a um número da matriz, este será substituído por -1.");

let matriz = [], matrizX = [];
let qnt = 0;

for (let i = 0; i < 30; i++){
    matriz[i] = [];
    matrizX[i] = [];
    for (let j = 0; j < 30; j++){
        matriz[i][j] = Math.floor(Math.random() * 40 + 1);
        if (matriz[i][j] == a){
            qnt++;
            matrizX[i][j] = -1;
        }else {
            matrizX[i][j] = matriz[i][j];
        }
    }
}

console.log(matriz);
console.log("Há %d números a serem substituídos. ", qnt);
console.log(matrizX);