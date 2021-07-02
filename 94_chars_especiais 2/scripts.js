const dia= /\d\d/;

console.log(dia.test("sdfrse"));
console.log(dia.test("05"));

const palavraTresLetras= /\w\w\w/;

console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("dia"));
console.log(palavraTresLetras.test("7897"));

/*caracteres especiais:

\d -qualquer digito de caractere;
\w -um caractere alfanumerico ("teste");
\s -qualquer caractere de espaço em branco;
\D -caracteres que não são digitos;
\W -caractere não-alfanumérico;
\S -caractere que não seja espaço em branco;
.  -qualquer caractere(menos nova linha);

*/
