const prompt = require ("prompt-sync")();

let num1 = parseInt (prompt ());
let num2 = parseInt (prompt ());

if (num1 > num2){
    console.log (num2, num1);
}else {
    console.log (num1, num2);
}