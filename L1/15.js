const prompt = require ("prompt-sync")();

let num, peso, conta = 0, contador = 0;


while ((num = parseFloat(prompt("Digite um número decimal: "))) != 0){
    peso = parseInt (prompt("Digite o peso dele: "));
    conta += peso * num;
    contador += peso;
}

let mediaPonderada = conta/contador;

console.log ("A média ponderada é igual a",mediaPonderada.toFixed(2));
