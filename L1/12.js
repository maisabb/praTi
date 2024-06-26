const prompt = require ("prompt-sync")();

for (let contador = 1000; contador <= 1999; contador++){
    if (contador % 11 == 5){
        console.log (contador);
    }
}
