//ex2


var p = (preco, percentual) => {
    preco = preco + (preco*percentual)
    
    return preco
}

console.log(p(10, 0.1))