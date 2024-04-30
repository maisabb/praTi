const prompt = require ("prompt-sync")();

let eleitores = parseInt (prompt ("Quantidade de eleitores: "));
let brancos = parseInt (prompt ("Quantidade de votos brancos: "));
let nulos = parseInt (prompt ("Quantidade de nulos: "));
let validos = parseInt (prompt ("Quantidade de válidos: "));

let pBrancos = (brancos * 100)/200;
let pNulos = (nulos * 100)/200;
let pValidos = (validos * 100)/200;

console.log ("Porcentagem de votos brancos: %d\nPorcentagem de votos nulos: %d\nPorcentagem de votos válidos: %d", pBrancos, pNulos, pValidos);
