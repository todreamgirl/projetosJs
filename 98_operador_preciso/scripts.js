// inserir o numero de ocorrência entre {}
const cep=/\d{5}-\d{3}/;

console.log(cep.test("13049-107"));
console.log(cep.test("13049-10"));
console.log(cep.test("dde"));

/* somente o primeiro consoloe terá um retorno 'true', 
pois os demais não atendem os critérios definidos na constante */

const telComPrefixo= /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(telComPrefixo.test("(19)9999-0153"));
console.log(telComPrefixo.test("(19)99991-0153"));
