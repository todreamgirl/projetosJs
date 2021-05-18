//Função sem parâmetro:

function imprimirNoConsole() {
    console.log("Olá mundo");
}

// Para executar uma função no JavaScript precisamos invocá-la:

imprimirNoConsole();

//Função com parâmetro:

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
}

imprimirUmNumero(2);
imprimirUmNumero(4);
imprimirUmNumero(6);
imprimirUmNumero(8);

//Função anônima atrelada a uma variável:

const numeroAleatorio = function () {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();
