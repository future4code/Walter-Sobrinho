export {};
// const add = (foo: number, boo: number): number {
//     return foo + boo
// }
const number1 = Number(process.argv[2]);

const number2 = Number(process.argv[3]);

function add(foo: number, boo: number): number {
  return foo + boo;
}

const result = add(number1, number2);
console.log("Resposta: ", result);
