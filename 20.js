const prompt = require ("prompt-sync")();

let funcionario = {
    matricula: 0,
    nome: "",
    salarioBruto: 0,
    inss: 0,
    salarioLiquido: 0

}

funcionario.matricula = prompt ("Número de matrícula do funcionário: ");
funcionario.nome = prompt ("Nome do funcionário: ");
funcionario.salarioBruto = prompt ("Salário bruto do funcionário: ");

funcionario.inss = funcionario.salarioBruto - (funcionario.salarioBruto * 0.88);
funcionario.salarioLiquido = funcionario.salarioBruto * 0.88;

console.log(funcionario);