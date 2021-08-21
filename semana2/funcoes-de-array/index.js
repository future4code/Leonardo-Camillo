// EXERCICIOS DE INTERPRETAÇÃO
//1.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//a) Iria aparecer o nome, o apelido e o index dos objetos da constante

//2.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
//a) Um array apenas com os nomes do objetos da constante
// ["Amanda Rangel", "Lais Petra", "Leticia Chijo"]

//3.
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
//a) Iria filtrar o ultimo objeto por conter a string "Chijo"
// { nome: "Amanda Rangel", apelido: "Mandi" }
// { nome: "Laís Petra", apelido: "Laura" }

// EXERCICIOS DE CÓDIGO
//1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 //a) 
 const nomeCachoros = pets.map((pets) => {return pets.nome})
 console.log(nomeCachoros)

 //b)
const cachorrosSalsicha = pets.filter((pets) => {return pets.raca === "Salsicha"})
console.log(cachorrosSalsicha)

//c)
const cachorrosPoodles = pets.filter((pets) => {return pets.raca === "Poodle"} )
const mensagem2 = cachorrosPoodles.map((cachorrosPoodles) => {return `Você ganhou um cupom de desconto de 10% para tosa o/a  ${cachorrosPoodles.nome}`})
console.log(mensagem2)

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
 const nomeProdutos = produtos.map((produtos) => {return produtos.nome})
 console.log(nomeProdutos)

 //b)
function checarDesconto(produtos) {
    desconto = produtos.preco * 0.95
    return desconto
}
const produtoComDesconto = produtos.map((produtos)=>{
    return {nome:produtos.nome, preco: checarDesconto(produtos)}
 })
 
 console.log(produtoComDesconto)

 //c) 
 const produtosBebibas = produtos.filter((produtos) => {return produtos.categoria === "Bebidas"})
 console.log(produtosBebibas)

 //d)
 const nomeYpe = produtos.filter((produtos) => {return produtos.nome.includes("Ypê")})
 console.log(nomeYpe)

 //e)
 const fraseYpe = nomeYpe.map((nomeYpe) => {return `Compre ${nomeYpe.nome} por ${nomeYpe.preco}`})
 console.log(fraseYpe)