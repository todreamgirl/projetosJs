//a estrutura json é semelhante a de um objeto porém não aceita métodos, apenas dados:

let pessoa = {
    "nome": "Jacqueline",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Dança", "Leitura", "Música"]
}

//convertendo uma estrutura json em string:

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);

// convertendo string em json:

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);