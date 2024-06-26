let vetor = [];

console.log ("Este é o vetor: ");

for (let i = 0; i < 20; i++){
    vetor[i] = Math.floor (Math.random() * (98) + 1);
    console.log (vetor[i]);

}

vetor.sort((a,b) => a - b);

console.log ("Vetor ordenado: ");

for (let i = 0; i < 20; i++){
    console.log (vetor[i]);
}



