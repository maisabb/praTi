const prompt = require ("prompt-sync")();

let alt = parseFloat (prompt("Digite a altura em metros: "));
let sexo = prompt ("Qual o sexo? 1 para masculino, 2 para feminino");

function pesoIdeal (alt, sexo){
    if (sexo == 1){
        return 72.7 * alt - 58;
    }else {
        return 62.1 * alt - 44.7;
    }
}

console.log ("Seu peso ideal é " + (pesoIdeal(alt,sexo)).toFixed(2) + "kg.");