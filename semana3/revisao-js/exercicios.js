// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a,b)=>a-b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    arrayFiltrado = array.filter((valor) => valor % 2 === 0)
    return arrayFiltrado
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    arrayFiltrado = array.filter((valor) => valor % 2 === 0)
    for (i = 0; i < arrayFiltrado.length; i++)
    arrayFiltrado[i] = arrayFiltrado[i]*arrayFiltrado[i]
    return arrayFiltrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (i = 0; i < array.length; i++)
    if(maiorNumero < array[i]){
        maiorNumero = array[i]
    }
    return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    if (num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1  
    }    
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0
    diferenca = maiorNumero - menorNumero
    return {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
    }
}
    
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    array = []
    for (let i = 0; novoArray.length < n; i++) {
      if (i % 2 == 0) {
        array.push(i)
      }
    }
    return array
  }

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoB && ladoB === ladoC) {
      return 'Equilátero'
    } else if (ladoA === ladoB || ladoA === ladoC || ladoC === ladoB) {
      return 'Isósceles'
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoC !== ladoB) {
      return 'Escaleno'
    }
  }

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}