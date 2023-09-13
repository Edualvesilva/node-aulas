function soma (valor1, valor2){
    return valor1 + valor2;
}

function multiplica (valor1,valor2){
    return valor1 * valor2;
}

function divide (valor1,valor2){
    return valor1 / valor2
}

function subtração (valor1,valor2){
    return valor1 - valor2
}

let resultadoSoma = soma(10,50)
let multiplicaResultado = multiplica(2,10)
let resultadoDivisao = divide(10,2)
let resultadoSubtracao = subtração(5,4)

console.log(`Soma: ${resultadoSoma}`)
console.log(`Multiplicação: ${multiplicaResultado}`)
console.log(`Divisão: ${resultadoDivisao}`)
console.log(`Subtração: ${resultadoSubtracao}`)