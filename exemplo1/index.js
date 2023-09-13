let aluno = "Kauan";
let nota1 = 7.8;
let nota2 = 4;

let media = (nota1 + nota2) / 2
console.log(media)
console.log("-----")

const dados = {
    nome : "Manoel Gomes",
    idade : 19,
    signo: "Áries"
};

console.log(dados.idade);
console.table(dados);

if(media >= 7) {
    console.log(`O aluno ${aluno} está Aprovado`)
} else {
    console.log(`O aluno ${aluno} está Reprovado`)
}