let nomeCompleto = prompt("Favor digitar seu nome completo.")
let tipoJogo = prompt("Favor informar o tipo de jogo [IN = Internacional/DO = Doméstico")
let etapaJogo = prompt("Favor informar a etapa do jogo [SF = Semifinal / DT = Terceiro lugar / FI = Final")
let catego = Number(prompt("Favor informar a categoria [1, 2, 3, 4]"))
let quantIng = Number(prompt("Favor informar a quantidade de ingressos."))
var valorIng = Number()

if (tipoJogo === "IN") {
    tipoJogo = "Internacional"
} else if (tipoJogo === "DO") {
    tipoJogo = "Doméstico"
}
if (etapaJogo === "SF") {
    etapaJogo = "Semifinal"
} else if (etapaJogo === "DT") {
    etapaJogo = "Terceiro lugar"
} else if (etapaJogo === "FI") {
    etapaJogo = "Final"
}
if (tipoJogo === "Doméstico") {
    if (catego === 1 && etapaJogo === "Semifinal") {
        valorIng = 1320
    } else if (catego === 2 && etapaJogo === "Semifinal") {
        valorIng = 880
    } else if (catego === 3 && etapaJogo === "Semifinal") {
        valorIng = 550
    } else if (catego === 4 && etapaJogo === "Semifinal") {
        valorIng = 220
    } else if (catego === 1 && etapaJogo === "Terceiro lugar") {
        valorIng = 660
    } else if (catego === 2 && etapaJogo === "Terceiro lugar") {
        valorIng = 440
    } else if (catego === 3 && etapaJogo === "Terceiro lugar") {
        valorIng = 330
    } else if (catego === 4 && etapaJogo === "Terceiro lugar") {
        valorIng = 170
    } else if (catego === 1 && etapaJogo === "Final") {
        valorIng = 1980
    } else if (catego === 2 && etapaJogo === "Final") {
        valorIng = 1320
    } else if (catego === 3 && etapaJogo === "Final") {
        valorIng = 880
    } else if (catego === 4 && etapaJogo === "Final") {
        valorIng = 330
    }
}
if (tipoJogo === "Internacional") {

    if (catego === 1 && etapaJogo === "Semifinal") {
        valorIng = 1320 * 4.10
    } else if (catego === 2 && etapaJogo === "Semifinal") {
        valorIng = 880 * 4.10
    } else if (catego === 3 && etapaJogo === "Semifinal") {
        valorIng = 550 * 4.10
    } else if (catego === 4 && etapaJogo === "Semifinal") {
        valorIng = 220 * 4.10
    } else if (catego === 1 && etapaJogo === "Terceiro lugar") {
        valorIng = 660 * 4.10
    } else if (catego === 2 && etapaJogo === "Terceiro lugar") {
        valorIng = 440 * 4.10
    } else if (catego === 3 && etapaJogo === "Terceiro lugar") {
        valorIng = 330 * 4.10
    } else if (catego === 4 && etapaJogo === "Terceiro lugar") {
        valorIng = 170 * 4.10
    } else if (catego === 1 && etapaJogo === "Final") {
        valorIng = 1980 * 4.10
    } else if (catego === 2 && etapaJogo === "Final") {
        valorIng = 1320 * 4.10
    } else if (catego === 3 && etapaJogo === "Final") {
        valorIng = 880 * 4.10
    } else if (catego === 4 && etapaJogo === "Final") {
        valorIng = 330 * 4.10
    }
}

console.log(
    "---Dados da compra---" + '\n' +
    "Nome do cliente: " + nomeCompleto + '\n' +
    "Tipo de jogo: " + tipoJogo + '\n' +
    "Etapa do jogo: " + etapaJogo + '\n' +
    "Categoria :" + catego + '\n' +
    "Quantidade de ingressos: " + quantIng + " ingressos." + '\n' +
    "---Valores---" + '\n' +
    "Valor do ingresso: ", valorIng, '\n' +
    "Valor total: ", (valorIng * quantIng))