function media(nota1, nota2, nota3){
    var media = (nota1 + nota2 + nota3) /3

    if(media >= 7){
        console.log("Aluno Aprovado")
    }else{
        console.log("Aluno reprovado")
    }
}

console.log(media(6, 7, 8))