const prompt = require ("prompt-sync")();

let tipo = prompt ("Digite 1 para popular e 2 para luxo: ");
let dias = prompt ("Quantos dias foi alugado: ");
let km = prompt ("Quantos km percorreu: ")

if (tipo == 1){
    if (km <= 100){
        km *= 0.2;
    }else {
        km *= 0.1;
    }
    console.log ("O valor a ser pago é de " + ((90 * dias) + km) + " reais por " + dias + " dias alugados!");
}else {
    if (km <= 200){
        km *= 0.3;
    }else {
        km *= 0.25;
    }
    console.log ("O valor a ser pago é de " + ((150 * dias) + km) + " reais por " + dias + " alugados!");
}