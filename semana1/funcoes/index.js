// EXERCICIO DE INTERPRETACAO
//1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
//a. 10 e 50 
//b. Erro de function

//2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
// a. Ela vai procurar a palavra cenoura dando como retorno true ou false
// b. i. true
// ii. true
// iii. true

//EXERCICIOS DE CÓDIGOS
//1.
//a. 
function leoDados() {
    console.log("Eu sou Leonardo, tenho 24 anos, moro em Praia Grande e sou estudante.")

}
leoDados()

// //b.
function leoDados1(nome,idade,cidade,profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(leoDados1("Leonardo", 24, "Praia Grande", "Estudante"))

//2.
//a.
const num1 = Number(prompt("Digite um número: "))
const num2 = Number(prompt("Digite um número" ))

function somaNumeros (num1,num2) {
    resultado = num1 + num2
    return resultado
}
const soma1 = somaNumeros(num1,num2)
console.log(soma1)

// //b.
function checarNumero(num1,num2) {
    resultado1 = num1 > num2
    return resultado1
}
const numeros = checarNumero(num1,num2)
console.log(numeros)

//c.
function numeroPar(num1) {
    resultado3 = num1 % 2 === 0
    return resultado3
}
const divisao = numeroPar(num1)
console.log(divisao)

//d.
function imprimirString(frase){
    frase = "oi, eu me chamo leonardo"
    console.log(frase.length)
    console.log(frase.toUpperCase())
}
imprimirString()

//3.
let n1 = Number(prompt("Insira um número: "))
let n2 = Number(prompt("Insira um número: "))
console.log ("Numeros inseridos: ",n1 ,"e",n2 ,)

function somarNumeros(n1,n2) {
    resultado4 = n1 + n2
    return resultado4
}
const somaUsuario = somarNumeros(n1,n2)
console.log("Soma:", somaUsuario)

function substairNumeros(n1,n2) {
    resultado5 = n1 - n2
    return resultado5 
}
const substracaoUsuario = substairNumeros(n1,n2)
console.log("Diferença: ", substracaoUsuario)

function divisaoNumeros(n1,n2){
    resultado6 = n1 / n2
    return resultado6
}
const divisaoUsuario = divisaoNumeros(n1,n2)
console.log("Divisão: ", divisaoUsuario)

function multiplicacaoNumeros(n1,n2){
    resultado7 = n1 * n2
    return resultado7
}
const multiplcacaoUsuario = multiplicacaoNumeros(n1,n2)
console.log("Multiplicação: ", multiplcacaoUsuario)