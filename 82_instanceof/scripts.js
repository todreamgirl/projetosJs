class mamifero {
    constructor(patas) {
        this.patas = patas;
    }
}

let coiote = new mamifero(4);

console.log(coiote.patas);

//ao herdar atributos de outra classe utilizamos 'extends' para instanciar e o 'super' para trazer os atributos:
class cachorro extends mamifero {
    constructor(patas, raca) {
        super(patas, patas);
        this.raca = raca;
    }
    latir() {
        console.log("auau");
    }
}

let pug = new cachorro(4, "pug");

console.log(pug.patas);

pug.latir();

//utilizamos o 'instanceof' para verificar o pai do objeto:
console.log(new cachorro instanceof mamifero);

console.log(coiote instanceof mamifero);