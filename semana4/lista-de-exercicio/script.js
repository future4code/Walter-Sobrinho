/*

                                            PARTE UM
EXERCÍCIO DE LEITURA DE CÓDIGO

1.
O código é uma função que recebe como parâmetro um determinado número - nesse caso, 100 - que deve 
ser uma quantia em dólar e converte-o para o valor em reais de acordo com um input
recebido via prompt que estabelece a cotação. O resultado da função é o valor em reais, esse resultado
é arquivado em uma variável no escopo global e impressa no console. 

2.
Nesse caso, o código ainda exibe uma função, mas nesse caso ela recebe dois parâmetros:
"tipoDeInvestimento" e "valor". A função está programada para 4 tipos de investimento diferentes:
Poupança, Renda Fixa, CDB e Ações, cada um com uma taxa de rendimento própria. O usuário deve, 
portanto ativar a função indicando um desses tipos de investimento e um valor a ser investido.
Caso o tipo de investimento não esteja adequadamente descrito, a função está programada para exibir
uma mensagem de erro. Caso os parâmetros estejam corretos, a função retorna ao usuário o valor 
inserido vezes a taxa de rendimento adequada. O código cria ainda duas variáveis para arquivar
valores de retorno da função caso os parâmetros sejam, respectivamente, "Ações" e "150" (retorno 165),
e "Tesouro Direto" e "200", para o qual a função não exibiria um retorno, já que naõ se trata de um
parâmetro válido. Por fim, o código exibe os retornos no console.

3.
O código cria três arrays, uma com 14 números aleatórios e duas vazias. Feito isso, ele seleciona
os números par e põe na array1 e os ímpar para a array2. Por fim, o código exibe no console o número
de itens que a array inicial possui (14), a quantidade de números que a array 1 possui (6) e a 
quantidade de números que a Array2 possui (8).

4.
O código dá um array de números e duas variáveis com valor indefinido e 0. Em seguida, cria condições
para se establecer o valor dessas variáveis. A primeira variável é escolhida buscando sempre o menor
valor. Ou seja, ela atravessa a array e avalia se o número é menor do que aquele que ela já tem 
estabelecido (inicialmente indefinido), e acaba se fixando como -10. A segunda busca o maior número
e se fixa como 1590. Ambos os valores são impressos no console.


EXERCÍCIO DE LÓGICA DE PROGRAMAÇÃO
1.
a. false
b. false
c. true
d. true
e. false

2.
O código não possui uma regra de identação, ou seja, não diz o que fazer cada vez que ele precisa
se repetir. Do jeito que está escrito, exibirá sempre 0 no console, porque "i" nunca mudará. Seria
necessário trabalhar com uma funçaõ que receba o parâmetro N e idente o processo por meio de um loop:

function quantidade(N) {
    for (let i = 0; i < N; i++) {
    console.log(i*2)
}
}

3.
function tipoDeTriangulo (a, b, c) {
    if ((a === b) && (a === c))
    console.log("É equilátero.")
    if ((a === b) && (a !== c) || (a === c) && (a !== b) || (b === c) && (a !== c))
    console.log("É isósceles.")
    if ((a !== b) && (a !== c) && (b !== c)){
        console.log("É escaleno.")
    }
}

4.

function operacoesComDoisNumeros (x, y) {
    if (x > y) {
        console.log(`O maior é: ${x}`)
    } if (y > x) {
        console.log(`O maior é: ${y}`)
    }
    if (x%y === 0) {
        console.log(`${x} é divisível por ${y}`)
    } if (x%y !== 0) {
        console.log(`${x} não é divisível por ${y}`)
    } if (y%x === 0) {
            console.log(`${y} é divisível por ${x}`)
    } if (y%x !== 0) {
            console.log(`${y} não é divisível por ${x}`)
    } if (x > y) {
        let resultado = x - y
        console.log(`A diferença entre eles é ${resultado}`)
    } if (y > x) {
        let resultado = y - x
        console.log(`A diferença entre eles é ${resultado}`)
    }
}


                                            PARTE DOIS

EXERCÍCIOS DE FUNÇÕES

1.

    arrayDeNumeros = [2, 5, 7, 9, 23, 56, 678, 4, 51, 89, 990, 21, 1]
    function seletora (array) {
        let maiorNumero = array[0]
        let menorNumero = array[0]
        let segundoMaiorNumero = array[0]
        let segundoMenorNumero = array[0]
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maiorNumero) {
                maiorNumero = array[i]
            }
            if (array[i] < menorNumero) {
                menorNumero = array[i]          
            }
        }
        console.log(maiorNumero)
        console.log(menorNumero)

        for (let i = 0; i < array.length; i++) {
        if ((array[i] > segundoMaiorNumero) && (array[i] !== maiorNumero)) {
            segundoMaiorNumero = array[i]
            }
        if ((array[i] < segundoMenorNumero) && (array[i] !== menorNumero)) {
                segundoMenorNumero = array [i]
            }
    }
    console.log(segundoMaiorNumero)
    console.log(segundoMenorNumero)   
}

seletora (arrayDeNumeros)

2.

let funcaoalerta = () => {
    alert("Hello Labenu_")
}

funcaoalerta()

EXERCÍCIOS DE OBJETOS

1.
Arrays são grupos ordenados de elementos. Essa ordem torna o array especialmente útil quando queremos
ou precisamos utilizar um elemento de uma lista através do seu índice, i. e., sua posição na lista.
Um objeto é um elemento do código semelhante a uma variável, embora seja mais complexo, porque pode 
possuir propriedades, a serem definidas pelo programador.

2.
function criaRetangulo(lado1, lado2) {
    const largura = lado1;
    const altura = lado2;
    const perimetro = (lado1 + lado2)*2;
    const area = (lado1*lado2)
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: perimetro,
        area: area
    }
    return retangulo
}

3.
const persona = {
        titulo: "Persona",
        ano: 1966,
        diretor: "Ingmar Bergman",
        elenco: "Bibi Anderson, Liv Ullmann, Margaretha Krook e Gunnar Björnstrand",       
}
console.log(`Venha assistir ao filme ${persona.titulo}, do ano ${persona.ano}, 
dirigido por ${persona.diretor} e estrelado por
${persona.elenco}`)

4.

const pessoa = {
    nome: "Jeff Buckley",
    idade: 30,
    email: "buckley_zeppelin@hotmail.com",
    endereco: "122 St. Marks Pl."
}

function anonimizarPessoa (objeto) {
    const pessoaAnonimizada = {
        ... pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnonimizada 
}


                                            PARTE 3


EXERCÍCIOS DE FUNÇÃO DE ARRAY

1.
Posso iterar arrays por meio dos loops "for", "for of" e "while".
Um exemplo seria:

arrayDeExemplo = ["Tio Macaco", "Chonks", "Lingus", "Shofukan"]

function iteraArray (array) {
    for (musica of array) {
        console.log(musica)
    }
}

A função passaria por cada elemento do array, nomeados "musica" nessa função e imprimiria no console
cada um deles.

2.
a. & b.

arrayDeExemplo = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
let adultos = []
let criancas = []
function selecionaAdultos (array) {
    for (i = 0 ; i < array.length ; i++)
    if (array[i].idade > 19) {
        adultos.push(array[i])
    }
    else {
        criancas.push(array[i])
    }
    console.log(adultos)
    console.log(criancas)
    }

3.

const array = [1, 2, 3, 4, 5, 6]
const arrayMultiplicadaPorDois = []

function funcaoMultiplicaPorDois(array) {
    for (i = 0 ; i < array.length ; i++) {
        let multiplicadoPorDois = array[i]*2
        arrayMultiplicadaPorDois.push(multiplicadoPorDois)
    }
    return arrayMultiplicadaPorDois
    }


const arrayMultiplicadaPorTres = array.map((number, idx, arr) => {
    return ""+number*3+""
}
)

const seletorParImpar = array.map((number, idx, arr) => {
    if (number%2===0) {
        return `${number} é par`
    } else {
        return `${number} é impar`
    }
})

4.

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const listaComPermissao = pessoas.filter((pessoa, idx, arr) => {
    if ((pessoa.altura > 1.4) && (pessoa.idade > 13) && (pessoa.idade < 60))
    return true
}
)

const listaSemPermissao = pessoas.filter((pessoa, idx, arr) => {
    if ((pessoa.altura < 1.5) || (pessoa.idade < 14) || (pessoa.idade > 60))
    return pessoa
})

5.

const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const canceladas = consultas.filter((paciente, idx, arr) => {
    if (paciente.cancelada) {
        return true
    }
}
)

const naoCanceladas = consultas.filter((paciente, idx, arr) => {
    if (paciente.cancelada === false) {
        return true
    }
})

const emailCanceladas = canceladas.filter((paciente, idx, arr) => {
    if (paciente.genero === masculino) {
        return 
    }
}
)
function email(genero, status) {
    if ((genero = masculino) && (status === canceladas) {
    return `Olá, Sr. ${consultas.nome}. Infelizmente, sua consulta marcada
        para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la`
    }
}

6.
*/
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

for (let i = 0; i < )
// let somaDasCompras () => {
//     for (let i = 0; i < contas.compras)
// contas.forEach((pessoa, idx, arr) => {
//     saldoTotal = saltoTotal - compras
// }
// )