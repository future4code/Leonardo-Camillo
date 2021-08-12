// EXERCICIO DE INTERPRETAÇÃO 
// //1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado) // false

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) // false

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado) // true 

// console.log("d. ", typeof resultado) //boolean

//2.
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)
// O programa juntar os numeros, não somaria, pois tudo impresso no prompt quando não convertido se torna string, sendo assim não calculável 

//3.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero
// console.log(soma)

// EXERCICIO DE CÓDIGO 
//1.
// let idade = Number(prompt("Qual é a sua idade? "))
// let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo(a)? "))
// let idadeDif = idade - idadeAmigo
// console.log(idade)
// console.log(idadeAmigo)
// console.log("Sua idade é maior que a do seu amigo?", idade > idadeAmigo)
// console.log(idadeDif)

//2.
// let numero1 = Number(prompt("Insira um número par: "))
// let divisao = numero1 % 2
// console.log(divisao)
// //Todo os números pares deram o resultado 0, enquanto todos os numeros impares o resultado dá  1

//3.
// let idade = Number(prompt("Quantos anos você tem? "))
// let idadeMeses = idade * 12
// let idadeDias = idade * 365
// let idadeHoras = idadeDias * 24
// console.log(idade)
// console.log(idadeMeses)
// console.log(idadeDias)
// console.log(idadeHoras)

//4. 
// let numero1 = Number(prompt("Insira um número: "))
// let numero2 = Number(prompt("Insiro o segundo número: "))
// console.log("O primeiro número é maior que o segundo? ", numero1 >  numero2)
// console.log("O primeiro número é igual ao segundo? ", numero1 === numero2)
// console.log("O primeiro número é divisível pelo segundo?", numero1 % numero2 === 0)
// console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0 )
