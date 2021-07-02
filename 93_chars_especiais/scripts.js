const pontoRegex= /./;
console.log(/./);
console.log(pontoRegex.test("sfs"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("sdf147"));


const dRegex= /\d/; //[0-9]

console.log(/d/);
console.log(dRegex.test("863"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("sdf147"));

const dRegex2= /\D/; //exceto digitos

console.log(/D/);
console.log(dRegex2.test("sfs"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("sdf147"));

const sRegex= /\s/; 

console.log(/s/); //qualquer caractere de espaço vazio, quebra de linha e tab
console.log(sRegex.test("sfs"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("sdf147"));

const sRegex2= /\S/; //exceto numeros

console.log(/S/); //exceto espaço em branco
console.log(sRegex2.test("sfs"));
console.log(sRegex2.test(" "));
console.log(sRegex2.test("123"));
console.log(sRegex2.test("sdf147"));


const wRegex= /\w/; 

console.log(/w/); //numeros e letras
console.log(wRegex.test("sfs"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("sdf147"));

const wRegex2= /\W/; 

console.log(/W/); //caractere não-alfanumerico
console.log(wRegex2.test("sfs"));
console.log(wRegex2.test(" "));
console.log(wRegex2.test("123"));
console.log(wRegex2.test("sdf147"));


/*caracteres especiais:

\d -qualquer digito de caractere;
\w -um caractere alfanumerico ("teste");
\s -qualquer caractere de espaço em branco;
\D -caracteres que não são digitos;
\W -caractere não-alfanumérico;
\S -caractere que não seja espaço em branco;
.  -qualquer caractere(menos nova linha);

*/
