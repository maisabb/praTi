let dados = {
    idade: 19,
    nome: 'Maisa',
    nomePet1: 'Sofia',
    nomePet2: 'Fred',
    idadePet: 1,
    nomesPets: ['Apollo','Preta','Lupita','Sofia','Fred','Hades', 'Bidu'],
    nomes: ['Willian','Pedro','Rodrigo','Gabriel']
}

function showObject(dados){
    for (let key in dados){
        if (Array.isArray(dados[key])){
            console.log(dados[key]);
        }
    }
}

showObject(dados);