const prompt = require ("prompt-sync")();

let vetor = [];

for (let i = 0; i < 6; i++){
    vetor[i] = Math.floor((Math.random() * 10) + 1);
}

console.log(vetor);

function soma(vetor) {
    let soma = 0;
    for (let i = 0; i < 6; i++){
        soma += vetor[i];
    }
    return soma;
}

function produto(vetor) {
    let produto = 1;
    for (let i = 0; i < 6; i++){
        produto *= vetor[i];
    }
    return produto;
}

function media(vetor) {
    return (soma(vetor)) / 6;
}

function ordem(vetor){

}

function show(vetor){
    console.log(vetor);
}

let escolha;

for ( ; ;){
    escolha = parseInt (prompt ("Digite 1 para somar, 2 para multiplicar, 3 para a média, 4 para ordenar, 5 para mostrar: "));
    if (escolha <= 0 || escolha > 5){
        console.log ("Inválido");
    }else {
        break;
    }
}

switch (escolha){
    case 1:
        console.log (soma(vetor));
        break;
    case 2:
        console.log(produto(vetor));
        break;
    case 3:
        console.log(media(vetor));
        break;
    case 4:
        console.log(ordem(vetor));
        break;
    case 5:
        console.log(show(vetor));
        break;
}

