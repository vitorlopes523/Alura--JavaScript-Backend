const cliente = {
  nome: "Vitor",
  idade: 23,
  email: "vitor@gmail.com",
  telefone: ["114456677", "92747448"],
  saldo: 200,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente")
    } else {
      this.saldo -= valor
      console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
    }
  }
}

cliente.efetuaPagamento(500)