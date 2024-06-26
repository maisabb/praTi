const prompt = require ("prompt-sync")();

let num1 = parseInt (prompt ("Primeiro número: "));
let num2 = parseInt (prompt ("Segundo número: "));
let num3 = parseInt (prompt ("Terceiro número: "));
let num4 = parseInt (prompt ("Quarto número: "));

num4 = num1 + num2 + num3;
num1 += 25;
num2 *= 3;
num3 *= 0.12;

num3 = num3.toFixed(1);

console.log (num1,num2,num3,num4);
