/*
1.
O código recebe um valor do usuário, converte-o para o tipo Number
e testa se o número é par ou ímpar. Caso seja par, ele exibe a mensagem
"Passou no teste" no console, caso contrário, exibe "Não passou no teste."

2.
a. O código recebe um valor string que deve constituir um nome de uma fruta
e exibe no log seu preço.

b. "O preço da Maçã é R$ 2,25"

c. R$ 24.25.

d. "O preço da fruta Pêra é  R$ 5"
*/


//Exercícios de escrita de código

//Exercício 4:
// const num1 = Number(prompt("Favor digitar um número."))
// const num2 = Number(prompt("Favor digitar outro número."))
//     //Se eu ponho dois números iguais, ele imprime-os no log
// const num3 = Number(prompt("Favor digitar um terceiro número."))

// if (num1 > num2 && num1 > num3 && num2 > num3) {
//     console.log("O primeiro número é " + num1, "O segundo número é " + num2, "O terceiro número é " + num3)
// } else if (num1 > num2 && num1 > num3 && num3 > num2) {
//     console.log("O primeiro número é " + num1, "O terceiro número é " + num3, "O segundo número é " + num2)
// } else if (num2 > num1 && num2 > num3 && num1 > num3) {
//     console.log("O segundo número é " + num2, "O primeiro número é " + num1, "O terceiro número é " + num3)
// } else if (num2 > num1 && num2 > num3 && num3 > num1) {
//     console.log("O segundo número é " + num2, "O terceiro número é " + num3, "O primeiro número é " + num1)
// } else if (num3 > num1 && num3 > num2 && num2 > num1) {
//     console.log("O terceiro número é " + num3, "O segundo número é " + num2, "O primeiro número é " + num1)
// } else if (num3 > num1 && num3 > num2 && num1 > num2) {
//     console.log("O terceiro número é " + num3, "O primeiro número é " + num1, "O segundo número é " + num2)
//     //Se eu ponho três números iguais, recebo a seguinte mensagem: "DomDistiller debug level: 0
// } else if (num1 === num2 && num2 === num3) {
//     console.log("Você não pode digitar três números iguais.")
// }

//Exercício 5:
{
    let vert = prompt("O animal é vertebrado ou invertebrado?")
    let pelos
    let racional
    let mami
    let humano = "É um ser humano."
    let nHumano = "É um mamífero não humano."
    let penas
    let ave = "É uma ave."
    let nAve
    let fish = "É um peixe."
    let periodWater
    let anfi = "É um anfíbio."
    let rept = "É um réptil."
    if (vert === "Vertebrado") {
        let pelos = prompt("O animal possui pelos? [s/n]")
        if (pelos === "Sim") {
            let mami = "É um mamífero."
            mami
            let racional = prompt("O animal é racional? [s/n]")
        }
        if (racional === "Sim") {
            let humano = "É um ser humano."
            humano
        } else
            "É um mamífero não-humano"
    } else if (pelos === "Não") {
        let penas = prompt("O animal possui penas? [s/n]")
        if (penas === "Sim") {
            let ave = "É uma ave."
            ave
        } else {
            let nAve = prompt("É terrestre?[s/n]")
        }
        if (nAve = "Sim") {
            let periodWater = prompt("Passa um período na água?[s/n]")
        } else {
            "É um peixe."
        }
    }
    if (periodWater = "Sim") {
        let anfi = "É um anfíbio."
        anfi
    } else {
        let rept = "É um réptil"
        rept
    }
}

// if (pelos === "Sim") {
//     let mami = "É um mamífero."
//     let racional = prompt("O animal é racional? [s/n]")
// } else {
//     console.log("Você não digitou uma opção válida")
// }
// if (racional === "Sim") {
//     let humano = "É um ser humano."
// } else if (racional === "Não") {
//     let nHumano = "É um mamífero não humano."
// }

// if (penas === "Sim") {
//     let ave = "É uma ave."
// } else if (penas === "Não") {
//     let nAve = prompt("É terrestre?[s/n]")
// }

// if (nAve === "Não") {
//     let fish = ("É um peixe.")
// } else {
//     let periodWater = prompt("Passa um período na água?[s/n]")
// }

// if (periodWater === "Sim") {
//     let anfi = "É um anfíbio."
// } else {
//     let rept = "É um réptil."
// }