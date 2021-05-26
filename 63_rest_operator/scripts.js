// o metodo rest operator é uma forma de uma função receber indefinidos parametros;
//o operador rest vai virar um array, e o parametro é definido por "...":

let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumeros(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

imprimirNumeros(num, num1, num2);

console.log("pausa");

imprimirNumeros(num2, num3);

console.log("pausa");

imprimirNumeros(2, 6, 8, 9, 12, 3, 12, 0, 5, 7);