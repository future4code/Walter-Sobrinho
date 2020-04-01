/*
Exercícios de interpretação.

Exercício 1:
O código cria a variável "i", de valor inicial 0 e adidiona +1 a ela até que seu valor
seja 15. Enquanto esse critério não é atingido, o comemando executa uma soma de "i" com
uma outra variável, "sum", a soma é sempre o valor atual de sum multiplicado por 2 e somado
com o valor atual de "i". O resultado impresso no console é 105.

Exercício 2:
a.
Cria um novo elemento numa lista.

b.
[10, 15, 25, 30]

c.
[12, 15, 18, 21, 27, 30];
[12].
*/

//Exercício 3
//a.

let oMaior = unidades[0]
let oMenor = unidades[0]
for (let i = 0; i < arrayOriginal.lenght; i++) {
    let elemento = unidades[i]

    if (elemento > oMaior) {
        oMaior = elemento
    } else if (elemento < oMenor)
        oMenor = elemento
}

console.log("O maior número é ", oMaior, " e o menor é", oMenor)

//b.

let arrayOriginal = [10, 20, 30, 40, 50]
var novaArray = []
for (let i = 0; i < arrayOriginal.length; i++) {
    let elemento = arrayOriginal[i]
    let resultado = elemento / 10
    novaArray.push(resultado)
}
console.log(novaArray)

//c.

let arrayOriginal = [10, 20, 30, 40, 50]
var novaArray = []
for (let i = 0; i < arrayOriginal.length; i++) {
    let elemento = arrayOriginal[i]
    let resultado = elemento / 2
    if (elemento % 2 === 0) {
        novaArray.push(resultado)
    }
}
console.log(novaArray)

//d.
let arrayOriginal = [10, 20, 30, 40, 50]
const arrayDePalavras = ["Oi", "sumida", "tudo", "bem", "sdds"]

for (let i = 0; i <= arrayOriginal.length; i++) {

    let frase = ["O elemento do index" + i + "é" + valor[i] + "."]
}
console.log(frase)

for (let valor of arrayOriginal) {
    for (let i = 0; i <= arrayOriginal.length; i++) {
        var frase = ["O elemento do index" + i + "é" + valor[i] + "."]
    }
    console.log(frase)
}