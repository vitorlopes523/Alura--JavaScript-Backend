const cliente = {
  nome: "Vitor",
  idade: 23,
  email: "vitor@gmail.com",
  telefone: ["114456677", "92747448"]
}

cliente.enderecos = [
  {
    rua: "Eduardo Ribeiro",
    numero: 123,
    apartamento: true,
    complemento: "ap 3"
  },
]

for (let chave in cliente) {
  let tipo = typeof cliente[chave]
  if (tipo !== "object" && tipo !== "function") {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
  }
}