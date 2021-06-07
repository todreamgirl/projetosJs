/* o strict mode deixa o js mais rigoroso, 
deve ser declarado no topo de arquivos ou funcões: */

"use strict"

let opa = "teste";

// o strict utilizado exclusivamente numa funcao:

function teste() {
    "use strict"
    let testando = 'teste';
}

teste();