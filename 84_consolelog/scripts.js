/* // console.log é um metodo bastante utilizado para debug,
principalmente em códigos mais complexos em que uma variável 
pode ter diversas alteracoes de valores: */

let a = 1;
let b = 2;
let c = 3;
/* // o console deve ser chamado em pontos importantes da aplicação
para que possamos acompanhar as mudanças mais claramente: */
if (c > a) {
    a = b;
    console.log(a);
}

for (let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
    console.log(a);
}

if (b == a) {
    a++;
} else {
    a = a + b + c;
}

console.log(a);

a = a * b;

console.log(a);