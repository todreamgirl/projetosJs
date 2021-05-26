//instanciando um obj por funcao:

function criarCachorro(raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function () {
        console.log("Au au");
    }
    return cachorro;
}

//criando um obj pelo metodo constructor:

let pug = criarCachorro('Pug', 4, 'preto');

console.log(pug);

pug.latir();
