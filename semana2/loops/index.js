// EXERCICIOS DE INTERPRETAÇÃO
//1.
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//a) 10

//2.
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//a) 19, 21, 23, 25, 27,30
//b) Sim, ast

//3.
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//a) O console imprimas uma linha com "*", e a cada linha abaixo ele adicionaria o "a" até´formar 4 linhas.

// EXERCICIOS DE LÓGICA 
//1.
const qtdBichos = Number(prompt("Quantos bichos de estimação você tem?"))
let i = 0
const array = []
if (qtdBichos === 0 ){
    console.log("Que pena! Você pode adotar um pet!")
}
while(i < qtdBichos){
    let nome = prompt("Digite o nome dos seus bichos: ")
    array.push(nome)
    i = i + 1
}
console.log(array)

//2.
//a)
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (numero of arrayOriginal)
console.log(numero)

//b)
for (numero of arrayOriginal)
console.log(numero/10)

//c)
const novaArray = []
for(i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] % 2 === 0){
        novaArray.push(arrayOriginal[i])
    }
}
console.log(novaArray)

//d)    
for(elemento of arrayOriginal){
    console.log(`O elemento do índex 0 é ${elemento}`)
}

//e)
let maiorNumero = 0 
let menorNumero = arrayOriginal[0]

for (numero of arrayOriginal){
    if(numero > maiorNumero){
        maiorNumero = numero
    }

}
for (numero of arrayOriginal){
    if(numero < menorNumero){
        menorNumero = numero
    }
}
console.log(`O maior numero é ${maiorNumero} e o menor é ${menorNumero}`)
