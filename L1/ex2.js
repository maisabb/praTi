const prompt = require ("prompt-sync")();

let eleitores = parseInt (prompt ());
let brancos = parseInt (prompt ());
let nulos = parseInt (prompt ());
let validos = parseInt (prompt ());

let pBrancos = (brancos * 100)/200;
let pNulos = (nulos * 100)/200;
let pValidos = (validos * 100)/200;

console.log ("%d\n%d\n%d", pBrancos, pNulos, pValidos);