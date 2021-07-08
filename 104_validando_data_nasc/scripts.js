const validarDataNasc= /[0-9]{2}[/][0-9]{2}[/][0-9]{4}/; //essa estrutura garante que a regex só aceite o formato: 00/00/0000

console.log(validarDataNasc.test('15/09/1992'));
console.log(validarDataNasc.test('5/9/1992'));
console.log(validarDataNasc.test('15-09-1992'));
console.log(validarDataNasc.test('15/09/92'));