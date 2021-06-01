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

cachorro.prototype.raca = "sem raca definida";

//definindo uma propriedade unica que não pode ser alterada(como uma constante) com symbol:
let patas = Symbol();

cachorro.prototype[patas] = 4;

let labrador = new cachorro('labrador', 'amarelo');

labrador.latir();

console.log(cachorro.prototype.raca);
console.log(labrador.raca);

// acessando symbol:
console.log(cachorro.prototype[patas]);

console.log(labrador[patas]);
