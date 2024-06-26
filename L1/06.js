const prompt = require ("prompt-sync")();

let a = parseInt (prompt("Lado a: "));
let b = parseInt (prompt("Lado b: "));
let c = parseInt (prompt("Lado c: "));

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
