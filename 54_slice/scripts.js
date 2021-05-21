let nums = [0,1,2,3,4,5,6,7,8,9];

//o parametro do slice é determinado pelo primeiro numero, o último indica o fim da busca e não é incluso na lista:

console.log(nums.slice(4,5));

// delimitando o parametro para exibir 4 e 5:

console.log(nums.slice(4,6)); //teremos 4 e 5 como resultado

//da mesma forma podemos determinar qual parte do array que queremos:

console.log(nums.slice(2));

// para obter os numeros do final, utilizamos o sinal de menos(negativo):

console.log(nums.slice(-2)); //mostrará os dois ultimos numeros do array

// podemos tambem delimitar excluindo numeros do final do array, tambem com o sinal de menos(negativo):

console.log(nums.slice(3,-2)); // nesse exemplo começaremos do terceiro numero do array e excluiremos os dois ultimos
