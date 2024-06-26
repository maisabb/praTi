const prompt = require ("prompt-sync")();

console.log ("Digite 1 para pedra, 2 para papel, 3 para tesoura: ");

let pcGuess = Math.floor (Math.random()*3) + 1;
let guess = prompt ();
if (guess == 1){
        if (pcGuess == 1){
            console.log ("Empate.")
        }else if (pcGuess == 2){
            console.log ("Computador ganhou!")
        }else if (pcGuess == 3){
            console.log ("Você ganhou!");
        }
}else if (guess == 2){
        if (pcGuess == 2){
            console.log ("Empate.");
        }else if (pcGuess == 1){
            console.log ("Você ganhou!")
        }else if (pcGuess == 3){
            console.log ("Computador ganhou!");
        }
}else if (guess == 3){
        if (pcGuess == 3){
            console.log ("Empate.");
        }else if (pcGuess == 1){
            console.log ("Computador ganhou!")
        }else if (pcGuess == 2){
            console.log ("Você ganhou!");
        }
    }