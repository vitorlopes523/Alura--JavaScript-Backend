import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }

  aprovaEstudante(nomeDoAluno, status, curso) {
    return `Aluno ${nomeDoAluno} ${status} no curso de ${curso}`
  }
}

// const novoDocente = new Docente('Fabio', 'fabio@gmail.com', '2022-02-03')
// console.log(novoDocente)
// console.log(novoDocente.exibirInfos())
// console.log(novoDocente.aprovaEstudante('Igor', 'reprovado', 'JS'))