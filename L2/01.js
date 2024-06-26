const prompt = require('prompt-sync')();

let qntCigarros = prompt ("Quantos cigarros vc usa por dia? ");

let anos = prompt ("Há qnt tempo vc fuma? ");

let tempoPerdido = (qntCigarros * 10) * 365 * anos;

console.log ("Você já perdeu " + tempoPerdido + " de vida");