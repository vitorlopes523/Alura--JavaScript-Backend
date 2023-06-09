//declaração de função

// function minhaFuncao(param) {
//   //bloco de código
// }

// minhaFuncao("param")

//expressão de função

const soma = function(num1, num2) { return num1 + num2}
console.log(soma(1, 1))

// a diferença principal: HOISTING(issamento)
//funções e var são "listadas" no topo do arquivo
//nas funções podemos chamar elas antes de declará-las, o mesmo caso do Var
//nos casos da CONST devemos primeiro atribuir o valor, e depois chamar a função ou a variável.