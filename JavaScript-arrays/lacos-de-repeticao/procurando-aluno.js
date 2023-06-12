const alunos = ["João", "Juliana", "Ana", "Caio"]
const medias = [10, 8, 7.5, 9]

const listasDeAlunosEMedias = [alunos, medias]

//includes => confere se o que estar passando por parãmetro estar incluso na lista
//indexOf => vai retornar o índice do que estamos passando por parâmetro

function exibeNomeENota(aluno) {
  if (listasDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listasDeAlunosEMedias[0]
    // const medias = listasDeAlunosEMedias[1]

    const [alunos, medias] = listasDeAlunosEMedias //desestruturação de listas, faz a mesma coisa que as variáveis acima

    const indice = alunos.indexOf(aluno)
    const mediaDoAluno = medias[indice]

    console.log(`${aluno} tem a média ${mediaDoAluno}`)
  } else {
    console.log("Aluno não encontrado!")
  }
}

exibeNomeENota("Ana")