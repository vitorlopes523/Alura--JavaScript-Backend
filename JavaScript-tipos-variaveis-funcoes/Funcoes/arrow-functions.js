function apresentar(nome) {
  return `meu nome é ${nome}`
}

// arrow function
const apresentarArrow = nome => `meu nome é ${nome}`
const some = (num1, num2) => num1 + num2

//arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
  if (num1 > 10 || num2 > 10) {
    return 'somente numeros menores que 10'
  } else {
    return num1 + num2
  }
}

console.log(somaNumerosPequenos(11, 8))