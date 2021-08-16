// EXERCICIOS DE INTERPRETAÇÃO
//a.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
//a) Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

//2.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)
//a){nome: Juca, idade:3, raca: SRD}
//{nome: Juba, idade:3, raca: SRD}
//{nome: Jubo, idade:3, raca: SRD}

//b)Raliza a copia de um objeto para outro

//3.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
//a)false
//  undefined

//b)false pq backender tem valor fase, e undefined pq altura não tem nada atribuido 

// EXERCICIOS DE LOGICA
1.
const pessoa = {
    nome: 'Leonardo',
    apelido: ["Léo", "Leleo","Leco"]
}
function imprimirNome(pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} e ${pessoa.apelido[2]}.`) 
}
imprimirNome(pessoa)

const novoApelido = {
    ...pessoa,
    apelido: ["Leozito","Lecoso", "Camillo"]
}
function imprimirNome(novoApelido) {
    console.log(`Eu sou ${novoApelido.nome}, mas pode me chamar de: ${novoApelido.apelido[0]}, ${novoApelido.apelido[1]} e ${novoApelido.apelido[2]}.`) 
}
imprimirNome(novoApelido)

//2.
const pessoa1 = {
    nome: "Leonardo",
    idade: 24,
    profissao: "Estudante" 

}

const pessoa2 = {
    nome: "André",
    idade: 29,
    profissao: "Atendente"
}
function receberObjetos(pessoa1, pessoa2) {
    infPessoa1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    infPessoa2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
    console.log(infPessoa1)
    console.log(infPessoa2)
}
receberObjetos(pessoa1, pessoa2)

//3.
const carrinho = []

const fruta1 = {
    nome: "Laranja",
    disponibilidade: true
}
const fruta2 = {
    nome: "Limão",
    disponibilidade: true
}
const fruta3 = {
    nome: "Maça",
    disponibilidade: true
}
function receberFrutas(fruta1,fruta2,fruta3) {
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    console.log(carrinho)
}
receberFrutas(fruta1,fruta2,fruta3)
