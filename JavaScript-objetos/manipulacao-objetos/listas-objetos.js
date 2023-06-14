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

cliente.enderecos.push({
    rua: "Batista Michiles",
    numero: 894,
    apartamento: false,
    complemento: "ap 1",
})

// console.log(cliente.enderecos)

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true)
console.log(listaApenasApartamentos)