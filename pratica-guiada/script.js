// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

//function imprimirNome(nome){
//    console.log(`Ola, ${nome}`)
//}

const imprimirNome = function(nome) {
    console.log(`Ola, ${nome}`)
}


imprimirNome("Edson")
imprimirNome("Miguel")
imprimirNome("Esther")

function fazerOperacoes(numero){
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero*numero  
    
    return (`O numero ${numero} e par? ${verifica}. Somado com 10 o resultado é 
    ${soma}. Multiplicado por ele mesmo o resultado é ${multiplica}`)
}

console.log(fazerOperacoes(12))

const verificaDados = (login, senha) => {
    const loginArmazenado = "edson@mail.com"
    const senhaArmazenada = "123456"
    
    return loginArmazenado === login && senhaArmazenada === senha
}
verificaDados("edson@mail.com", "123456")
console.log(verificaDados("edson@mail.com", "123456"))