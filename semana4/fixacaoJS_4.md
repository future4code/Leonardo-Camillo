```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let vezesRepetidas = 0;
  let mensagem;
  arrayDeNumeros.forEach((numero) => {
    if (numero === numeroEscolhido ) {
       vezesRepetidas +=1
       mensagem = O número ${numeroEscolhido} aparece ${vezesRepetidas}
   });
  if (vezesRepetidas === 0)
  mensagem = "Número não encontrado"

  return mensagem
}
``` 