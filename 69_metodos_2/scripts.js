const carro = {
    marca: "smd",
    acelerar: function () {
        console.log("vruuuum");
    },
    abrir: function () {
        console.log("Porta abrindo");
    },
    setMarca: function (marca) {
        this.marca = marca;
    },
    getMarca: function () {
        return "O carro é: " + this.marca;
    }
}

console.log(carro.marca);

carro.setMarca("Toyota");

console.log(carro.marca);

console.log(carro.getMarca());

