// new serve para criarmos instâncias através de uma função construtora
//usar inical maiúcula na criação de classes
// function User(nome, email) {
//   this.nome = nome
//   this.email = email

//   this.exibirInfos = function() {
//     return `${this.nome}, ${this.email}`
//   }
// }

//usando construtor
// const novoUser = new User('Vitor', 'vitor@gmail.com')
// console.log(novoUser.exibirInfos())

// function Admin(role) {
//   User.call(this, 'Vitor', 'vitor@gmail.com')
//   this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfos())
// console.log(novoUser.role)

const user = {
  init: function(nome, email) {
    this.nome = nome
    this.email = email
  },

  exbirInfos: function() {
    return this.nome
  }
}

const novoUser = Object.create(user)
novoUser.init('Vitor', 'vitor@gmail.com')
console.log(novoUser.exbirInfos())


