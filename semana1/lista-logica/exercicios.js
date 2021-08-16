// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, base) {
  base = Number(prompt("Qual a base do retângulo?"))
  altura = Number(prompt("Qual a altura do retângulo?"))
  area = base * altura
  console.log(area)
  return area   
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual = Number(prompt("Em qual ano você esta?"))
  anoNascimento = Number(prompt("Em qual ano você nasceu?"))
  idade = anoAtual - anoNascimento
  return idade
}

idadeUsuario = imprimeIdade()
console.log(idadeUsuario)

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  IMC = peso / (altura*altura)
  console.log(IMC)
  return IMC
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  nome = prompt("Qual seu nome? ")
  idade = prompt("Qual sua idade? ")
  email = prompt("Qual seu email? ")
  frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  todasCores = []
  cor1 = prompt("Qual sua cor favorita? ")
  cor2 = prompt("Qual sua cor favorita? ")
  cor3 = prompt("Qual sua cor favorita? ")
  todasCores.push(cor1)
  todasCores.push(cor2)
  todasCores.push(cor3)
  console.log(todasCores)
  return todasCores
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  string = string.toUpperCase()
  return string
}
fraseMaiscula = retornaStringEmMaiuscula("bom dia")
console.log(fraseMaiscula)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  semPreju = custo / valorIngresso
  console.log(semPreju)
  return semPreju
}
calculaIngressosEspetaculo(3000,10)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2){
  checarTam = string1.length === string2.length
  console.log(checarTam)
  return checarTam

} 
checaStringsMesmoTamanho("Oi","Boa Noite")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0] 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
primeiroElemento = array [0]
array[0] = array[array.length -1]
array[array.length-1] = primeiroElemento
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  checarIgualdade = (string1.toLowerCase()) === (string2.toLowerCase())
  console.log(checarIgualdade)
  return checarIgualdade
}
checaIgualdadeDesconsiderandoCase("Alo", "alO")

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}