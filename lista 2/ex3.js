//ex3 


var bomba = (vazao, cap) => {
    //vazao litros por segundo
    //cap em litros
    var s = cap/vazao // segundos
    var m = s / 60 //minutos
    var h = m / 60 // horas
    console.log("Segundos: "+s)
    console.log("Minutos: " +m)
    console.log("Horas: "+h)
}
console.log(bomba(4, 2000))