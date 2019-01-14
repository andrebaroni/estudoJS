
const real = troco => troco - 1.00

const cent50 = a => parseFloat((a - 0.50).toFixed(2))

const cent10 = a => a - 0.1

const cent1 = a => a - 0.01

const metro = (cobra, fornecido) => {
    var troco = 0
    troco = fornecido - cobra
    if (troco == 0){
        console.log("Sem troco")
    }

    //for i
    var i = 0
    while(troco >= 1){

        //real(troco)
        troco = real(troco)
        //troco = troco - 1
      
        i++
    }
    console.log(i + " moedas de 1 real")
    
    i = 0
    while (troco >= 0.5){
            
            troco = parseFloat(cent50(troco).toFixed(2))
            //troco = troco - 0.5
            i++
    }
    console.log(i + " moedas de 50 centavos")
    
    i = 0
    //console.log(troco)
    while(troco >= 0.10 ){

        troco = cent10(troco)
        //troco = troco - 0.1
        i++
    }
    console.log(i + " moedas de 10 centavos")
  
    i = 0
    while(troco > 0){
        troco = cent1(troco)
        //troco = troco - 0.01
        i++
    }
    console.log(i + " moedas de 1 centavo")
}

metro(4, 6.1)