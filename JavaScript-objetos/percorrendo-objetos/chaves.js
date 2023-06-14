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

const chavesDoObjeto = Object.keys(cliente)

console.log(chavesDoObjeto)

if (! chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado!")
}