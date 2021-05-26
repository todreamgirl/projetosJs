// instanciando um obj pelo metodo new:

function cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log("Auuuuuu");
    }
}

let golden = new cachorro("Golden", 4, "caramelo");

console.log(golden);
golden.uivar();