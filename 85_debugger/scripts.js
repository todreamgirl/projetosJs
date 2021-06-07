/* // o debugger é um metodo bastante utilizado para debug,
principalmente em códigos mais complexos em que uma variável 
pode ter diversas alteracoes de valores: */

let a = 1;
let b = 2;
let c = 3;
/* // o debugger deve ser chamado em pontos importantes da aplicação
para que possamos acompanhar as mudanças mais claramente: */
if (c > a) {
    a = b;
    debugger;
}

for (let i = 5; i > 0; i--) {
    b++;
    a = a + c + 1;
    c += 2;
    debugger;
}

if (b == a) {
    a++;
} else {
    a = a + b + c;
}

debugger;

a = a * b;

debugger; //verificar o funcionamento do debug

console.log("teste");