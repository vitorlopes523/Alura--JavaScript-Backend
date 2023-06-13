const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

//Set => conjunto, ele basicamente remove elementos duplicados, formando uma nova lista
const nomesAtualizados = [...new Set(nomes)]

console.log(nomesAtualizados)