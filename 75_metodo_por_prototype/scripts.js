//  um obj pelo metodo prototype:

function cachorro(raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
}
cachorro.prototype.uivar=function(){
    console.log("auuuuuuu");
}
cachorro.prototype.latir=function(){
    console.log("au au");
}
let golden = new cachorro("Golden", 4, "caramelo");

console.log(golden);
golden.uivar();
golden.latir();

