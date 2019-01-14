//ex1
var convert = (dolar, cotacao) => {
    var real = 0
    real = parseFloat(cotacao*dolar)
    return real
}

console.log(convert(20, 3))
