class cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }
    latir() {
        console.log("au au");
    }
    get getCor() {
        return this.cor;
    }
    //devemos sempre passar um parametro para o set:
    set setCor(cor) {
        this.cor = cor;
    }
}

let pastor = new cachorro("Pastor Alemão", "sem cor");

console.log(pastor);

pastor.setCor = "marrom";

console.log(pastor.getCor);