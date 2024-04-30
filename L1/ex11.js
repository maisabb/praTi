const prompt = require ("prompt-sync")();

let num;

for (let contador = 0; ; contador++){
    num = prompt ();
    if (num <= 0){
        break;
    }
}