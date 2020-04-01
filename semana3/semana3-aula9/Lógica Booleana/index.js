/* 
1.
a. false
b. true
c. false
d. false
e. boolean

2.
a. Array um conjunto de valores arquivados em uma ordem determinada. Declara-se utilizando um indentificador, um operador de atribuição, 
no caso, o síbolo de igual (=) e um conjunto de valores cercados por colchetes.
b. 0
c. array.length
e. 
I.  undefined
II.  null
III.  11
IV.  3  e  4
V.  19  e  9
VI.  3
VII.  1
*/

//Primeira atividade

let tempFarenheit = 77
let tempKelvin = (tempFarenheit - 32) * 5 / 9 + 273


console.log(tempKelvin + "K");

let tempCelcius = 80
let tempFarenheit2 = tempCelcius * 9 / 5 + 32

console.log(tempFarenheit2 + "ºF")

let tempCelcius2 = 30
let tempFarenheit3 = tempCelcius2 * 9 / 5 + 32
let tempKelvin2 = (tempFarenheit3 - 32) * 5 / 9 + 273
console.log(tempFarenheit3 + "ºF " + tempKelvin2 + "K")

let tempCelcius3 = prompt("Digite a temperatura em Celcius")
let tempFarenheit4 = tempCelcius3 * 9 / 5 + 32
let tempKelvin3 = (tempFarenheit4 - 32) * 5 / 9 + 273
console.log(tempFarenheit4 + "ºF " + tempKelvin3 + "K")

//Segybda atividade
const bestAlbum = prompt("Qual o melhor disco da história?")
console.log("1. " + bestAlbum)

const whyKant = prompt("Por que Kant precisava da reovolução copernicana?")
console.log("2. " + whyKant)

const whatHume = prompt("Qual a principal contribuição de Hume para a filosofia?")
console.log("3. " + whatHume)

const howSound = prompt("Como Sound of Muzak pode ser tão maravilhosa?")
console.log("4. " + howSound)

const joniMitchell = prompt("Qualo o melhor disco da Joni Mitchell?")
console.log("5. " + joniMitchell)

//Terceira atividade
let kW = prompt("Qual o consumo na sua residência?")
console.log("O seu gasto em reais (R$) é " + kW * 0.05)

kW = 280
console.log("O seu gasto em reais (R$) é " + kW * 0.05)

console.log("O seu gasto em reais (R$) é " + (kW * 0.05) * 0.85)

//Desafios

//a
let lb = 20
let kg = (lb * 0.453592)
console.log("20lb equivalem a " + kg + "kg.")

let oz = 10.5
let kg2 = (oz * 0.0283495)
console.log("10.5oz equivalem a" + kg2 + "kg.")

let mi = 100
let m = (mi * 1609.34)
console.log("100mi equivalem a" + m + "m.")

let ft = 50
let m2 = (ft * 0.3048)
console.log("50ft equivalem a " + m2 + "m.")

let gal = 103.56
let l = (gal * 3.78541)
console.log("103.56gal equivalem a" + l + "L.")

let xic = 450
let l2 = (xic * 0.150)
console.log("450 xic equivalem a " + l2 + "L.")

let xic2 = prompt("Digite o valor em xícaras (xic)")
let l3 = (xic2 * 0.150)
console.log("450 xic equivalem a " + l3 + "L.")