import fs from 'fs'
import chalk from 'chalk'

function extrairLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)]
  const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
  return resultados
}

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'))
}

// async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const enconding = 'utf-8'
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
    console.log(extrairLinks(chalk.blue(texto)))
  } catch (erro) {
    trataErro(erro)
  } finally {
    console.log(chalk.yellow('operação concluída'))
  }
}

// promises com then()

// function pegaArquivo(caminhoDoArquivo) {
//   const enconding = 'utf-8'
//   fs.promises
//     .readFile(caminhoDoArquivo, enconding)
//     .then((texto) => console.log(chalk.yellow(texto)))
//     .catch(trataErro)
// }


pegaArquivo('./arquivos/texto.md')

