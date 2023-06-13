const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//Callback => chamar de volta, basicamente ele é a função que vai ser executada para cada elemento do array
notas.forEach(function(nota) {// também podemos passar outro parâmetro no forEach com o indice do array
  somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(`A média das notas é ${media}`)
