const pessoa = {
  nome: "Vitor",
  profissão: "Desenvolvedor",
}

console.log(pessoa.nome)
console.log(pessoa.telefone)

pessoa.telefone = "11 6788899999"
console.log(pessoa.telefone)

pessoa.nome = "Vitor Lopes"
console.log(pessoa.nome)

console.log(pessoa)

// Por mais que a variável do objeto seja uma const, ainda sim podemos modificar os valores que já existem nela, mas não podemos reatribuir um novo obejto para essa variável, confira o exemplo abaixo:
// const novaPessoa = {
//   nome: "Pedro",
// }
// pessoa = novaPessoa