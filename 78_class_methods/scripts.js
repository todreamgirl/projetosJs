// criando uma classe pelo metodo constructor ES6:

class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("au au");
    }
}

cachorro.prototype.patas = 4;

let golden = new cachorro("Golden trivier", "dourado");

console.log(golden.patas);

golden.latir();

