let cachorro = {
    patas: 4,
    raca: "sem raça definida",
    latir: function () {
        console.log(" Au au");
    }
}

let pug = Object.create(cachorro);

pug.latir();

pug.raca = "Pug";

console.log(pug.raca);

console.log(cachorro.raca);

let bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog Francês";

console.log(bulldog.raca);
