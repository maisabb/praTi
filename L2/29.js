let matriz = [];

let somaTotal = 0;

for (let i = 0; i < 5; i++){
    matriz[i] = [];
    for (let j = 0; j < 5; j++){
        matriz[i][j] = Math.floor(Math.random() * 20 + 1);
        somaTotal += matriz[i][j];
    }
}

console.log(matriz);

let somaL = 0;

for (let i = 3; i < 4; i++){
    for (let j = 0; j < 5; j++){
        somaL += matriz[i][j];
    }
}

let somaC = 0;

for (let i = 0; i < 5; i++){
    for (let j = 1; j < 2; j++){
         somaC += matriz[i][j];
    }
}

let somaD = 0;

for (let i = 0; i < 5; i++){
    for (let j = 0; j < 5; j++){
        if (j == i){
            somaD += matriz[i][j];
        }
    }
}

console.log ("A soma da linha 4 é %d, a soma da coluna 2 é %d, a soma da diagonal principal é %d e a soma total é %d", somaL, somaC, somaD, somaTotal);
