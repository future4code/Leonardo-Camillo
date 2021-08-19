// EXERCICIO DE INTTERPRETAÇÃO
//1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
//a) Ele checa se a sobra de um número dividido por 2 corresponde a 0.
//b) Pares
//c) Impares

//2.
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a) switch case que precifica a fruta de acordo com a escolha do usuário 
//b) O preço da fruta Maçã é R$ 2.25
//c) O preço da fruta  Pêra  é  R$  5

//3.
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
//a) Pedindo ao usuario que digite o primeiro número
//b) Se digitasse 10, apareceria "Esse número passou no teste". Se digitasse -10, nada apareceria.
//c) Sim, pois a última linha tenta imprimir uma variável da qual ela não tem acesso, pois esta dentro do escopo filho

// EXERCICIO DE CODIGOS
//1.
const idade = Number(prompt("Qual é a sua idade? "))
if (idade >= 18){ 
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

//2.
function mensagemTurno(turno) {
    turno = prompt("Qual seu turno? M para Matutino, V para Verpertino e N para Noturno.")
    if(turno === "M"){
        console.log("Bom dia")
    }else if(turno === "V"){
        console.log("Boa tarde")
    }else if(turno === "N"){
        console.log("Boa noite")
    }else {
        console.log("Erro")
    }
}
mensagemTurno()

//3.
function mensagemTurno(turno) {
    turno = prompt("Qual seu turno? M para Matutino, V para Verpertino e N para Noturno.")
    switch (turno) {
        case "M":
            console.log("Bom dia")
            break
        case "V":
            console.log("Boa tarde")
            break
        case "N":
            console.log("Boa noite")
            break
        default:
            console.log("Erro")        
    }
}
mensagemTurno()

//4.
function assistirFilme(genero, preço){
    genero = prompt("Qual gênero do filme? ")
    preço = prompt("Qual é o preço do ingresso? ")
    if(genero === "Fantasia" && preço <= 15){
        console.log("Bom filme")
    }else {
        console.log("Escolha outro filme!")
    }
}
assistirFilme()