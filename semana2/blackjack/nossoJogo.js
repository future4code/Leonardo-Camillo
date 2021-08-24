/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
const boaVindas = "Boas vindas ao jogo de Blackjack!"
console.log(boaVindas)
if (confirm("Quer iniciar um nova rodada?")) {
   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let primeiraCartaPC = comprarCarta()
   let segundaCartaPC = comprarCarta()
   
   let totalUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   let totalPC = primeiraCartaPC.valor + segundaCartaUsuario.valor
   
   console.log("Cartas do usuário: ", primeiraCartaUsuario.texto, segundaCartaUsuario.texto, "=" ,totalUsuario)
   console.log("Cartas Pc: ", primeiraCartaPC.texto, segundaCartaPC.texto, "=",  totalPC)
      if (totalUsuario > totalPC) {
         console.log("Usuário ganhou!")
      } else if (totalUsuario < totalPC){
         console.log("Pc ganhou")
      } else if (totalPC = totalUsuario){
         console.log("Empate")
      }

} else {
   console.log("O jogo acabou pra você!")
}

