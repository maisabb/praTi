const prompt = require ("prompt-sync")();

let a = parseInt (prompt());
let b = parseInt (prompt());
let c = parseInt (prompt());

if (a < b + c && b < a + c && c < a + b){
    if (a == b && a == c){
        console.log ("É um triângulo equilátero");
    }else if (a != b && a != c && b != c){
        console.log ("É um triângulo escaleno");
    }else {
       console.log ("É um triângulo isósceles");
    }
}else {
    console.log ("Não é triângulo");
}