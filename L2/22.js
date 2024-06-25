const prompt = require ("prompt-sync")();

let salario = [], filhos = [], escolha, qnt = 0, qntM = 0, somaS = 0, somaF = 0, percentual, mediaS, mediaF;

function leitura (){
    
    for (let i = 0; ; i++){
        salario[i] = parseInt (prompt ("Qual o salário? "));
        if (salario[i] <= 350){
            qntM++;
        }
        filhos[i] = parseInt (prompt ("Quantos filhos? "));
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

    percentual = (qntM * 100) / qnt;

    let max = Math.max(...salario);

    console.log ("A média salarial é " + mediaS + ", a média de filhos é " +  mediaF +  ", o salário mais alto é "+  max + " e o percentual de pessoas com salário menor ou igual a 350 é " + percentual);
}


for ( ; ;){
    escolha = prompt ("Deseja cadastrar um habitante? Digite 1 para sim e 2 para não: ");
    if (escolha == 1){
        leitura ();
    }else {
        break;
    }
}