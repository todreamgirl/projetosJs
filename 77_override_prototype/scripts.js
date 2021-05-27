// criando uma classe pelo metodo constructor ES6:

class cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }
    latir() {
        console.log("au au");
    }
}
cachorro.prototype.raca = "sem raça definida";
cachorro.prototype.patas = 4;

let golden = new cachorro("Golden trivier", 4, "dourado");

console.log(golden.patas);

golden.latir();

console.log(cachorro.prototype.raca);
console.log(golden.raça);