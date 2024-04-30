const prompt = require ("prompt-sync")();

let num;

for (let contador = 0; ; contador++){
    num = prompt ("Digite um  número: ");
    if (num <= 0){
        break;
    }
    if (num % 2 == 0){
        console.log ("O número é par");
    }else if (num % 2 != 0 && num % 3 == 0){
        console.log ("O número é ímpar");
    }
}
