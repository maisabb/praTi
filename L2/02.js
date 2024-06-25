const prompt = require ("prompt-sync")();

let velocidade = prompt ("Digite a velocidade por hora ");

if (velocidade > 80){
    console.log ("Você receberá uma multa de " + (velocidade - 80) * 5 + " reais");
}else {
    console.log ("Velocidade dentro do permitido.");
}