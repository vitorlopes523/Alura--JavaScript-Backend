import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Vitor', 'Lopes de Matos','vitor@gmail.com', '2021-01-01')
// console.log(novoUser.nome) 
// novoUser.nome = 'Vitor Lopes de Matos'
// console.log(novoUser.nome) 
// console.log(novoUser.sobrenome)

const novoDocente = new Docente('Leo', 'leo@gmail.com', '2023-01-01')
console.log(novoDocente.exibirInfos())


// const novoAdmin = new Admin('Paulo', 'paulo@gmail.com', '2022-02-01')
// console.log(novoAdmin.nome)
// novoAdmin.nome = 'André'
// console.log(novoAdmin.nome)

