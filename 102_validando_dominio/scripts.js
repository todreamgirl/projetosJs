const validaDominio= /[?www.]\w+\.com.br|.com/;

console.log(validaDominio.test("www.google.com"));
console.log(validaDominio.test("www.mtv.net"));
console.log(validaDominio.test("twitter.com"));