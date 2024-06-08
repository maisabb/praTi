const prompt = require ("prompt-sync")();

let salario = [], filhos = [], escolha, qnt = 0, qntM = 0, somaS = 0, somaF = 0, percentual, mediaS, mediaF;

 for ( ; ;){
    escolha = prompt ("Deseja cadastrar um habitante? Digite 1 para sim e 2 para não: ");
    if (escolha == 1){
        leitura ();
    }else {
        break;
    }
}



function leitura (){
    
    for (let i = 0; ; i++){
        salario[i] = prompt ("Qual o salário? ");
        if (salario[i] <= 350){
            qntM++;
        }
        filhos[i] = prompt ("Quantos filhos? ");
        qnt++;
        somaS += salario[i];
        somaF += filhos[i];
        escolha = prompt ("Deseja cadastrar mais um habitante? Digite 1 para sim, 2 para não.");
        if (escolha != 1){
            break;
        }
    }

    
    mediaS = somaS / qnt;
    mediaF = somaF / qnt;

    percentual = (qntM * 100) / 100;

    let max = Math.max(...salario);

    return [mediaS, mediaF, max,percentual];
}

console.log (leitura());