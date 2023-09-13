// import soma from "./modulos/funcoes.mjs"  // Importando um único recurso

import {soma,multiplica,divide,subtracao} from './modulos/funcoes.mjs' // Importando Vários recursos

let resultadoSoma = soma(10,50)
let multiplicaResultado = multiplica(2,10)
let resultadoDivisao = divide(10,2)
let resultadoSubtracao = subtracao(5,4) 

console.log(`Soma: ${resultadoSoma}`)
console.log(`Multiplicação: ${multiplicaResultado}`)
console.log(`Divisão: ${resultadoDivisao}`)
console.log(`Subtração: ${resultadoSubtracao}`)