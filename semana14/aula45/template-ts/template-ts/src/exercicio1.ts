export {};
const name: string = process.argv[2];
const age: number = Number(process.argv[3]);

console.log("Olá,", name, "você tem", age, "anos");

console.log(
  "Olá,",
  name,
  "! Você tem ",
  age,
  "anos. Em sete anos você terá",
  age + 7
);
