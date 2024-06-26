const prompt = require ("prompt-sync")();

let celsius = parseInt(prompt ("Digite a temperatura em Celsius: "));

let fahreinheit = (celsius * 9)/5 + 32;

console.log (fahreinheit);
