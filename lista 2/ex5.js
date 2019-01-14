const lucro = (preco) => {
    preco = preco + (preco*0.45) //14,5
    preco = preco - (preco*0.2) // 11,6
    return preco
}


const test = (preco) => {
    console.log("Preco de fabrica: " + preco)
    preco = preco + (preco*0.15) //preco com lucro
    preco = preco + (preco*0.25) //preco com margem de desconto
    console.log("Preco com 15% de margem de lucro: " + (preco-preco*0.2))
    return preco
}

console.log("Preço Final: " + test(100))
