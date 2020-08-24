"use strict";
exports.__esModule = true;
// const add = (foo: number, boo: number): number {
//     return foo + boo
// }
var number1 = Number(process.argv[2]);
var number2 = Number(process.argv[3]);
function add(foo, boo) {
    return foo + boo;
}
var result = add(number1, number2);
console.log("Resposta: ", result);
