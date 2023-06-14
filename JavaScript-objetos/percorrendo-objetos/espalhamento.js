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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`)
  console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
  destinatario: cliente.nome,
  ...cliente.enderecos[0]
}

console.log(encomenda)