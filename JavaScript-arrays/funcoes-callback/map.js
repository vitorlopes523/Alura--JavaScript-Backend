// O map é usado principamente quando queremos reescrever uma array com novos valores, ele não modifica o array original
const notas = [10, 9.5, 8, 7, 6]

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1
})

console.log(notasAtualizadas)