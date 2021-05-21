let pessoa = {
    nome: "Jacqueline"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "Jacqueline"
}

console.log(pessoa == pessoa2);

console.log(pessoa3==pessoa);

pessoa2.nome = "Carlos";

console.log(pessoa.nome);

pessoa.nome = "Maria";

console.log(pessoa2.nome);