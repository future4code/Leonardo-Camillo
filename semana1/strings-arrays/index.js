// EXERCICIOS DE INTERPRETAÇÃO
//1.
// let array
// console.log('a. ', array) 
//a. undefined

// array = null
// console.log('b. ', array)
//b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
//c. 11

// let i = 0
// console.log('d. ', array[i])
// d. 3

// array[i+1] = 19
// console.log('e. ', array)
// e. Array(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// f. 9

//2.
//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ÔNIBUS EM MIRROCOS

// EXERCICIOS DE CÓDIGOS
//1.
const nome = prompt("Qual é o seu nome? ")
const email = prompt("Qual é o seu email? ")
console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}.`)

//2.
const comida = ["Lasanha", "Strogonoff", "Parmegiana", "Picanha", "Pizza"]
console.log("Essas são minhas comidas preferidas: ")
console.log(comida[i=0])
console.log(comida[i=1])
console.log(comida[i=2])
console.log(comida[i=3])
console.log(comida[i=4])
const comidaUsuario = prompt("Qual sua comida preferida? ")
comida [1] = comidaUsuario
console.log(comida)


//3.
const lista = []
const tarefa1 = prompt("Lista a tarefa n°1 a ser feita: ")
const tarefa2 = prompt("lista a tarefa n°2 a ser feita: ")
const tarefa3 = prompt("lista a tarefa n°3 a ser feita: ")
lista.push(tarefa1)
lista.push(tarefa2)
lista.push(tarefa3)
const numeroUsuario = Number(prompt("Indice já realizado: "))
lista.splice(numeroUsuario,1)
console.log(lista) 