let carros =["BMW","AUDI", "VW", "FIAT"];

//para remover o primeiro elemento de um array utilizamos o shift:

let removerPrimeiroCarro= carros.shift();

console.log(removerPrimeiroCarro);

console.log(carros);

// para adicionar um elemento ou mais no inicio do array utilizamos o unshift:

carros.unshift("GURGEL");

console.log(carros);

//acessando elementos dentro do array:
console.log(carros[0]);