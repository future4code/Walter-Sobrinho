     //Variáveis e funções

     function comprarCarta() {
         // Cria array de cartas
         const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
         // Cria array de naipes
         const naipes = ["♦️", "♥️", "♣️", "♠️"]
             // Sorteia uma carta
         const numero = cartas[Math.floor(Math.random() * 13)]
             // Sorteia um naipe
         const naipe = naipes[Math.floor(Math.random() * 4)]

         let valor

         // Verifica se é uma das letras e coloca o valor correspondente na variável valor
         if (numero === "A") {
             valor = 11
         } else if (numero === "J" || numero === "Q" || numero === "K") {
             valor = 10
         } else { // Se nao for uma das letras, só converte a string para número
             valor = Number(numero)
         }
         // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
         const carta = {
             texto: numero + naipe,
             valor: valor
         }

         const carta2 = {
             texto: numero + naipe,
             valor: valor
         }
         const carta3 = {
             texto: numero + naipe,
             valor: valor
         }
         const carta4 = {
             texto: numero + naipe,
             valor: valor
         }
         return carta, carta2, carta3, carta4
     }

     //Jogo

     console.log("Bem vindo(a) ao jogo de Blackjack!")
     let mao = []
     if (confirm("Você deseja inciar uma nova rodada?")) {
         const carta = comprarCarta();

         console.log("Usuário - carta: ", carta.texto, " - ", "Pontuação =", carta.valor)
         mao.push(carta.valor)

         const carta2 = comprarCarta();

         console.log("Usuário - carta: ", carta2.texto, " - ", "Pontuação =", carta2.valor)
         mao.push(carta2.valor)

         const carta3 = comprarCarta();

         console.log("Computador - carta: ", carta3.texto, " - ", "Pontuação =", carta3.valor)
         mao.push(carta3.valor)

         const carta4 = comprarCarta();

         console.log("Computador - carta: ", carta4.texto, " - ", "Pontuação =", carta4.valor)
         mao.push(carta4.valor)

         if ((mao[0] + mao[1]) > (mao[2] + mao[3])) {
             console.log("O jogador venceu!")
         }
         if ((mao[0] + mao[1]) === (mao[2] + mao[3])) {
             console.log("Empate!")
         }
         if ((mao[0] + mao[1]) < (mao[2] + mao[3])) {
             console.log("O computador venceu!")
         }
     } else {
         console.log("O jogo acabou!")
     }