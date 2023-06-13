//spread operator(...) =>(operador de espalhamento) ele pega os elementos já existentes em uma lista para usar em outra, e podemos adicionar mais elementos se necessário
const notas = [7, 7, 8, 9]

const novasNotas = [...notas, 10]

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)