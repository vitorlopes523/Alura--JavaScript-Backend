const cliente = {
  nome: "Vitor",
  idade: 23,
  cpf: "12344567",
  email: "vitor@gmail.com"
}

console.log(`O nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade} anos`)
console.log(`Os três primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}`)