// Resolva o Exercício de Fixação!

function nomeIdade (nome, nascimento, anoAtual) {
    const idade = anoAtual - nascimento
    const maiorDeIdade = idade >= 18 
    
    return (`${nome} é maior de idade? ${maiorDeIdade}`)
}
console.log(nomeIdade ("Edson", 1993, 2023))
console.log(nomeIdade ("Esther", 2014,2020))