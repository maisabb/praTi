const prompt = require ("prompt-sync")();

let num;

for (let contador = 1; contador <= 5; contador++){
    num = prompt ("Digite um número: ");
    for (let i = 1; i <= num; i++){
        console.log (i + " x " + num + " = " + num * i);
    }
}