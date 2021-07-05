const notAB= /[^ab]/;

console.log(notAB.test("a"));
console.log(notAB.test("aqui tem a")); //essa sentença não será negada pois ainda que tenhamos o 'a', ele não aparece isoladamente