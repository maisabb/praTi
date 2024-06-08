const prompt = require ("prompt-sync")();

let distancia = prompt ("Quantos km deseja percorrer: ");

if (distancia <= 200){
    console.log ("A viagem custará " + distancia * 0.5 + " reais.");
}else {
    console.log ("A viagem custará " + distancia * 0.45 + " reais.");
}