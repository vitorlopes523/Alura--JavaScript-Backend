import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    super(nome, email, nascimento, role, ativo) //super é de superclasse, serão reaproveitados os atributos da classe pai
  }

  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}

// const novoAdmin = new Admin('Paulo', 'paulo@gmail.com', '2022-02-01')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('JS', 20))
