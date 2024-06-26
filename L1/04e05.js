const prompt = require ("prompt-sync")();

let nota1 = parseInt (prompt ("Primeira nota: "));
let nota2 = parseInt (prompt ("Segunda nota: "));

let media = (nota1 + nota2)/2;

if (media >= 6){
    console.log ("Parabéns! Você foi aprovado");
}else {
    console.log ("Você foi REPROVADO! Estude mais");
}
