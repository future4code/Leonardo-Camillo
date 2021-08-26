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
    let menor = Infinity
    let maior = - Infinity
    let segundoMenor = Infinity
    let segundoMaior = - Infinity
    let novoArray = []
    for (num of array) {
      if (num < menor) {
        menor = num
      }
      if (num > maior) {
        maior = num
      }
    }
    for (num of array) {
      if (num < segundoMenor && num !== menor) {
        segundoMenor = num
      }
      if (num > segundoMaior && num !== maior) {
        segundoMaior = num
      }
    }
    novoArray.push(segundoMaior)
    novoArray.push(segundoMenor)
    return novoArray
  }

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[03]}.`    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return {...pessoa, nome:"ANÔNIMO"}

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
pessoasAutorizadas = pessoas.filter((pessoas) => {
    if (pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60){
        return true
    }
})
return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
    if (pessoas.altura >= 1.5 && pessoas.idade > 14 && pessoas.idade < 60){
        return false
     }
     return true
})
return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let array = consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1
        }
        if (a.nome < b.nome) {
          return -1
        }
        return 0
      })
      return array
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}