let gabarito = [], respostas = [];

function getRandomLowercaseLetter() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    return letters[Math.floor(Math.random() * letters.length)];
}

for (let i = 0; i < 20; i++){
    gabarito[i] = getRandomLowercaseLetter();
}

console.log(gabarito)

for (let i = 0; i < 50; i++){
    respostas[i] = [];
    for (let j = 0; j < 20; j++){
        respostas[i][j] = getRandomLowercaseLetter();
    }
}

console.log(respostas);

let acertos = [];
for (let i = 0; i < 50; i++){
    acertos[i] = 0;
}

for (let i = 0; i < 50; i++){
    for (let j = 0; j < 20; j++){
        for (let k = 0; k < 20; k++){
            if (respostas[i][j] == gabarito[k]){
                acertos[i]++;
            }
        }
        
    }
}

console.log(acertos);

for (let i = 0; i < 50; i++){
    if (acertos[i] >= 12){
        console.log("Aluno " + (i + 1) + " aprovado com " + acertos[i] + " pontos!");
    }else {
        console.log("Aluno " + (i + 1) + " reprovado com " + acertos[i] + " pontos!");
    }
}