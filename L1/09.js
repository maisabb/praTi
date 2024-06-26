const prompt = require ("prompt-sync")();

let regiao = prompt ("Digite o código da região: ");

if (regiao == 1){
    console.log ("Sul");
}else if (regiao == 2){
    console.log ("Norte");
}else if (regiao == 3){
    console.log ("Leste");
}else if (regiao == 4){
    console.log ("Oeste");
}else if (regiao == 5 || regiao == 6 || (regiao >= 25 && regiao <= 50)){
    console.log ("Nordeste");
}else if (regiao == 7 || regiao == 8 || regiao == 9){
    console.log ("Sudeste");
}else if (regiao >= 10 && regiao <= 20){
    console.log ("Centro-Oeste");
}else {
    console.log ("Produto Importado");
}
