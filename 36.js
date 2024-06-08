let gabarito = [], cartao = [], apostas = [];

gabarito = [1, 3, 4, 5, 1, 4, 8, 1, 2, 3, 2, 4, 5];

console.log(gabarito);

for (let i = 0; i < 100; i++){
    apostas[i] = [];
    for (let j = 0; j < 13; j++){
        apostas[i][j] = Math.floor(Math.random() * 10 + 1);
    }
}

console.log(apostas)

let ganhadores = [];

for (let i = 0; i < 100; i++){
    ganhadores[i] = 0;
}

for (let j = 0; j < 100; j++) {
    let acertos = [];
    for (let k = 0; k < 13; k++) {
        if (gabarito.includes(apostas[j][k])) {
            if (!acertos.includes(apostas[j][k])) {
                acertos.push(apostas[j][k]);
            }
        }
    }
    ganhadores[j] = acertos.length;
}

console.log(ganhadores)

for (let i = 0; i < 100; i++){
   if (ganhadores[i] == 13){
    console.log ("Parabéns, o ganhador número " + (i + 1)  + " ganhou!")
   }
}



