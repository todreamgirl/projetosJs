const padrao= /abacax?i/;

console.log(padrao.test("abacaxi"));
console.log(padrao.test("abacai"));
//nessa situação os dois consoles terão resultado 'true' pois o "x" foi marcado como opcional pelo '?'(question);

const padrao2= /\d+\w?/; // nesse caso foi definido que deverá retornar um ou mais digitos e que letras são opcionais

console.log(padrao2.test("123"));
console.log(padrao2.test("123a"));
console.log(padrao2.test("123 "));




