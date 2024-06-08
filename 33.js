let matriz = [];
let diagonalP = [], media = 0, qnt = 0;

for (let i = 0; i < 3; i++){
    matriz[i] = [];
    for (let j = 0; j < 3; j++){
        matriz[i][j] = Math.floor((Math.random() * 20) + 1);
        if (i == j){
            diagonalP[i] = matriz[i][j];
        }
        if (j == i - 1){
            media += matriz[i][j];
            qnt++;
        }
    }
}

console.log(matriz);

for (let i = 0; i < 3; i++){
    diagonalP[i] *= (media/qnt);
}

console.log(diagonalP)

