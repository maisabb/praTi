let vetorA = [], vetorB=[];

for (let i = 0; i < 100; i++){
    vetorA[i] = Math.floor((Math.random() * 50) - 20);
}

console.log(vetorA);

for (let i = 0, j = 0; i < 100; i++){
    if (vetorA[i] > 0){
        vetorB[j] = vetorA[i];
        j++;
    }
}

console.log(vetorB)
