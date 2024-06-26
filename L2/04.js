const prompt = require ("prompt-sync")();

let a = parseFloat (prompt ("lado a: "));
let b = parseFloat (prompt ("lado b: "));
let c = parseFloat (prompt ("lado c: "));

if (a < b + c && b < a + c && c < a + b){
    console.log ("Forma um triângulo.");
}else {
    console.log ("Não forma um triângulo.");
}
