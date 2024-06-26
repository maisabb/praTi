let matriz = [];

for (let i = 0; i < 10; i++){
    matriz[i] = [];
    for (let j = 0; j < 10; j++){
        matriz[i][j] = Math.floor(Math.random() * 20 + 1);
    }
}

let somaB = 0, somaC = 0;

for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        if (i > j){
            somaB += matriz[i][j];
        }
    }
}

for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        if (j > i){
            somaC += matriz[i][j];
        }
    }
}

console.log(matriz);

console.log("Soma abaixo da diagonal é %d e a soma acima é %d", somaB, somaC);