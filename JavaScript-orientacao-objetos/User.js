// a classes é açucar sintático, significa que é uma camada de abstração para melhorar a perfomance
// atributos privados, getters e setters ==> encapsulamento
// getters => acessar propriedade
// setters => modificar propriedade
// polimorfismo => quando o método é o mesmo em outras classes ou subclasses, mas o comportamento interno é diferente

export default class User {
  #nome
  #sobrenome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#sobrenome = sobrenome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error('Formato inválido')
    }
    
    let [nome, ...sobrenome] = novoNome.split(" ")
    sobrenome = sobrenome.join(' ')
    this.#nome = nome
    this.#sobrenome = sobrenome
  }

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`
  }

  get sobrenome() {
    return this.#sobrenome
  }

  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
  }
}


// const novoUser = new User('Vitor', 'vitor@gmail.com', '2021-01-01')
// console.log(novoUser)
// console.log(novoUser.exibirInfos())

// console.log(User.prototype.isPrototypeOf(novoUser))