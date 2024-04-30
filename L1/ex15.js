const prompt = require ("prompt-sync")();

let num, peso, conta = 0, contador = 0;


while ((num = parseFloat(prompt())) != 0){
    peso = parseInt (prompt());
    conta += peso * num;
    contador += peso;
}

let mediaPonderada = conta/contador;

console.log (mediaPonderada.toFixed(2));