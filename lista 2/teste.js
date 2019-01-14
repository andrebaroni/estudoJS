const Pessoa =  function(nome, idade){
    this.nome = nome
    this.idade = idade
}

console.log(new Pessoa("Aaaa", 10))
new Pessoa("Bbbb", 20)

const pessoa = (a, b) => ({a:a, b:b})

console.log(pessoa(1,2))



const aaa = (aa, bb) => {
    return aa+bb
}

console.log(aaa(5, 10, "a"))