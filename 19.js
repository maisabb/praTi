const prompt = require ('prompt-sync')();

let horas = [], minutos = [], segundos = [];
let qnt = 0, i = 0;

while (qnt < 5){
        horas[i] = prompt ("Digite as horas: ");
        if (horas[i] < 0 || horas[i] > 23){
            for ( ; ;){
                horas[i] = prompt ("Horas inválido. Digite novamente: ")
                if (horas[i] >= 0 && horas[i] <= 23){
                    break;
                }
            }
        }
        minutos[i] = prompt ("Digite os minutos: ");
        if (minutos[i] < 0 || minutos[i] > 59){
            for ( ; ;){
                minutos[i] = prompt ("Minutos inválido. Digite novamente: ")
                if (minutos[i] >= 0 && minutos[i] <= 59){
                    break;
                }
            }
        }
        segundos[i] = prompt ("Digite os segundos: ");
        if (segundos[i] < 0 || segundos[i] > 59){
            for ( ; ;){
                segundos[i] = prompt ("Segundos inválido. Digite novamente: ")
                if (segundos[i] >= 0 && segundos[i] <= 59){
                    break;
                }
            }
        }
        i++;
        qnt++;
}

for (let i = 0; i < 5; i++){
    console.log (horas[i] + ":" + minutos[i] + ":" + segundos[i]);
}

