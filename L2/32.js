let matriz = [];
let maior = [];

for (let i = 0; i < 3; i++){
    matriz[i] = [];
    maior[i] = 0;
    for (let j = 0; j < 3; j++){
        matriz[i][j] = Math.floor((Math.random() * 101) - 50);
        if (Math.abs(matriz[i][j]) > Math.abs (maior[i])){
            maior[i] = Math.abs(matriz[i][j]);
        }
    }
}

console.log(matriz);

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
       matriz[i][j] /= maior[i];
    }
}

console.log(matriz);