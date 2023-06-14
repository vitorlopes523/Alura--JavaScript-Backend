const cliente = {
  nome: "Vitor",
  idade: 23,
  cpf: "12344567",
  email: "vitor@gmail.com"
}

console.log(`O nome do cliente é ${cliente["nome"]} e sua idade é ${cliente["idade"]} anos`)

const cheves = ["nome", "idade", "cpf", "email", "altura"]

cheves.forEach((chave) => {
  console.log(`A cheve ${chave} tem valor ${cliente[chave]}`)
})