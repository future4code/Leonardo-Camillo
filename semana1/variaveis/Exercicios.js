// EXERCICIOS DE INTERPRETAÇÃO
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
// (10, 5)

let a1 = 10	
let b1 = 20
let c1 = 1
c1 = a1
b1 = c1
a1 = b1

console.log(a1, b1, c1)
// (10, 10, 10)

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
// Ele faz uma média entre horas trabalhadas por dia e o quanto você recebe por cada hora
// p = horasTrabalhada
// t = salarioDiario

// EXERCICIOS DE LÓGICA
let nome
let idade
console.log(typeof nome)
console.log(typeof idade)
// "nome" e "idade" foram definidas como undefined, pois não foram atribuidos nenhum valor a elas
nome = prompt("Digite seu nome ")
idade = prompt("Qual sua idade?  ")
console.log(typeof nome)
console.log(typeof idade)
//"nome" e "idade" agora foram definiddas como string, pois todo retorno de prompt quando não convertido vem em formato de STRING
console.log("Olá",nome,"você tém",idade,"anos")

const nomeLeo = true
console.log("Você sé chama Léonardo?", nomeLeo)
const cidade = true
console.log("Você mora na Praia Grande? ",cidade)
const idadeLeo = true
console.log("Você tem 24 anos?", idadeLeo)

numeroA = 29
numeroB = 70
numeroC = 1
numeroC = numeroA
numeroA = numeroB 
numeroB = numeroC
console.log(numeroA, numeroB,)