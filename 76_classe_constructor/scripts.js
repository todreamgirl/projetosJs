// criando uma classe pelo metodo constructor ES6:

class cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
}

let golden = new cachorro("Golden trivier", 4, "dourado");

console.log(golden);