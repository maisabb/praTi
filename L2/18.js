const prompt = require ("prompt-sync")();

let funcionario = {
    nome: "",
    cargo: "",
    salario: 0
}

funcionario.nome = prompt ("Nome: ");
funcionario.cargo = prompt ("Cargo: ");
funcionario.salario = parseFloat (prompt("Salário: "));

console.log(funcionario);