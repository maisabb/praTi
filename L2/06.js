const prompt = require ("prompt-sync")();

let guess = prompt ("Tente adivinhar o número! ");
let pcGuess = Math.floor(Math.random()*5) + 1;

for (let i = 0; ; i++){
    if (pcGuess == guess){
        console.log ("Acertou! Parabéns!");
        break;
    }else {
        guess = prompt ("Tente novamente: ");
    }
}