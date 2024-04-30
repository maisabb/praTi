const prompt = require ("prompt-sync")();

let celsius = parseInt(prompt ());

let fahreinheit = (celsius * 9)/5 + 32;

console.log (fahreinheit);