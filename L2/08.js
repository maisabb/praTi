const prompt = require ("prompt-sync")();

let horas = parseFloat (prompt ("Quantas horas trabalhadas no mês: "));

if (horas <= 10){
    horas *= 2;
}else if (horas > 10 && horas <= 20){
    horas *= 5;
}else {
    horas *= 10;
}

console.log ("Você tem " + horas + " pontos e ganhou " + horas * 0.05 + " reais.");