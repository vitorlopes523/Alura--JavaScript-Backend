//Filter - filtrar, ele cria um novo array menor ou do mesmo tamanho que o original, ele retorna verdadeiro ou falso
//onde o valor falso é descartado e o verdadeiro é adicionado no novo array.
const alunos = ["Ana", "Marcos", "Maria", "Mauro"]
const medias = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((_, indice) => {
  return medias[indice] < 7
})

console.log(reprovados)