let matrizA = [], matrizB = [], matrizP = [];

for (let i = 0; i < 3; i++){
    matrizA[i] = [];
    for (let j = 0; j < 5; j++){
        matrizA[i][j] = Math.floor(Math.random() * 20 + 1);
    }
}

for (let i = 0; i < 5; i++){
    matrizB[i] = [];
    for (let j = 0; j < 3; j++){
        matrizB[i][j] = Math.floor(Math.random() * 20 + 1);
    }
}

