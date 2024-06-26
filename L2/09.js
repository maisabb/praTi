const prompt = require ("prompt-sync")();

let gender, salario;
let somaM = 0, somaF = 0;

while (true){
    gender = prompt ("Digite 1 para masculino e 2 para feminino: ");
    salario = parseFloat (prompt ("Salário: "));
    
    if (gender == 1){
        somaM += salario;
    }else {
        somaF += salario;
    }

    if (prompt ("Deseja adicionar mais funcionários? 1 para sim, 2 para não") != 1){
        break;
    }
}

console.log ("Total pago a funcionários homens foi de %d e a funcionárias mulheres foi de %d",somaM,somaF);