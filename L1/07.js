const prompt = require ("prompt-sync")();

let macas = parseInt (prompt("Quantidade de maçãs: "));
let valor;

if (macas < 12){
    valor = (0.3 * macas).toFixed(1);
    console.log (valor);
}else {
    valor = 0.25 * macas;
    console.log (valor);
}
