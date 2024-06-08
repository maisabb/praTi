let matriz = [];

for (let i = 0; i < 6; i++){
    matriz[i] = [];
    for (let j = 0; j < 8; j++){
        matriz[i][j] = Math.floor(Math.random() * 101 - 50);
    }
}

let negativos = [];
for (let i = 0; i < 6; i++){
    negativos[i] = 0;
}

let i = 0;

while (i < 6){
    let coluna = 0;
    while (coluna < 8){
        if (matriz[i][coluna] < 0){
            negativos[i]++;
        }
        coluna++;
    }
    i++;
}


console.log(matriz);

console.log(negativos);
