const prompt = require ("prompt-sync")();

let num = parseInt (prompt("Digite um número: "));

for (let contador = 0; contador < 10; contador++){
    console.log (num);
}
