let matriz = [];

for (let i = 0; i < 5; i++){
    matriz[i] = [];
    for (let j = 0; j < 5; j++){
        matriz[i][j] =  matriz[i][j] = Math.floor(Math.random() * 20 + 1);
    }
}

console.log(matriz);

let SC = [], SL = [];

for (let i = 0; i < 5; i++) {
    SC[i] = 0;
    SL[i] = 0;
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        SC[j] += matriz[i][j];
        SL[i] += matriz[i][j];
    }
}

console.log("A soma das colunas é " + SC + " e a soma das linhas é " + SL);

