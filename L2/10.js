const prompt = require ("prompt-sync")();

let num, menor;
let soma = 0, par = 0, qnt = 0;
let vetor = [];
do {
    num = parseFloat (prompt ("Digite o número: "));
    vetor.push(num);
    menor = vetor[0];
    if (vetor[qnt] < vetor[0]){
        menor = vetor[qnt];
    }
    if (num % 2 == 0){
        par++;
    }
    soma += vetor[qnt];
    qnt++;
    
}while ((prompt ("Deseja continuar? Digite 1 para sim e 2 para não: ")) == 1);

console.log ("A média foi %d, o somatório foi %d, tem %d números pares, o menor valor é %d",soma/qnt,soma,par,menor);