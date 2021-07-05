const umOuMaisNumeros= /\d+/;

console.log(umOuMaisNumeros.test("1548"));
console.log(umOuMaisNumeros.test("   "));

// essa opção só terá retorno 'false' se o console estiver " "(vazio) ou se colocarmos letras ao invés de dígitos.

