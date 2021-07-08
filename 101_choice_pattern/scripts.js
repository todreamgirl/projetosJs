// o choice pattern permite que criemos uma regra, nesse caso palavra(\w+:) + algum dos nomes(Jacqueline| Maria| João);
const reg = /\w+: (Jacqueline|Maria|João)/;

console.log(reg.test("Nome: Jacqueline"));
console.log(reg.test("Nome: Joaquim"));