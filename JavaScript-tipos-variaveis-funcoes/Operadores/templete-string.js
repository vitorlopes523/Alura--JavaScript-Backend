const nome = "Vitor"
const idade = 2023 - 1999
const cidadeDeNascimento = "Maués"
const bebidaMaior = "cerveja"
const bebidaMenor = "suco"

//const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento
const apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento} e quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}`
console.log(apresentacao)