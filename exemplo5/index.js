import chalk from 'chalk';

console.log("Gerenciamento de Pacotes")

let aluno = 'João Gomes';
let idade = 6;

if (idade >= 18 ) {
        console.log(chalk.blue(`${aluno} é maior de idade`))
} else {
    console.log(chalk.white.bgMagenta(`${aluno} é menor de idade`))
}

console.log(chalk.blue('Hello world!'));