//ex2

function p(preco, percentual){
    var valor
    preco = preco + (preco*percentual)
    valor = preco
    return valor
}

console.log(p(10, 0.1))