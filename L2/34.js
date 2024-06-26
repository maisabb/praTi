let matriz = [], diagonalP = [];

for (let i = 0; i < 50; i++){
    matriz[i] = [];
    for (let j = 0; j < 50; j++){
        matriz[i][j] = Math.floor((Math.random() * 20) + 1);
        if (i == j){
            diagonalP[i] = matriz[i][j];
        }
    }
}

console.log(matriz);

for (let i = 0; i < 50; i++){
    for (let j = 0; j < 50; j++){
        matriz[i][j] *= diagonalP[i];
    }
}

console.log(matriz);
