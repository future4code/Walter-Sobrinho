//EXERCICIO 1
// a)

let minhaString: string = "valor";

// minhaString = 13;

//b

let meuNumero: number = 14;

// meuNumero = "catorze";

//c
type pessoa = {
  nome: string;
  idade: number;
  corFavorita: string;
};

//d

const drummond: pessoa = {
  nome: "carlos",
  idade: 118,
  corFavorita: "cinza",
};

const bandeira: pessoa = {
  nome: "manuel",
  idade: 135,
  corFavorita: "azul",
};

const gullar: pessoa = {
  nome: "ferreira",
  idade: 91,
  corFavorita: "vermelho",
};

//e
enum CoresPermitidas {
  cor1 = "vermelho",
  cor2 = "laranja",
  cor3 = "amarelo",
  cor4 = "verde",
  cor5 = "azul",
  cor6 = "anil",
  cor7 = "violeta",
}

type pessoa_2 = {
  nome: string;
  idade: number;
  corFavorita: CoresPermitidas;
};

//EXERCICIO 2

function exercicio2(foo: number, boo: number): any {
  console.log("a soma dos dois números é: ", foo + boo);
  console.log("a substração do primeiro pelo segundo número é: ", foo - boo);
  console.log("a multiplicação dos dois numeros é: ", foo * boo);
  if (foo - boo > 0) {
    console.log(foo);
  } else {
    console.log(boo);
  }
}

//EXERCÍCIO 3

type arr = number[];

function exercicio3(arr): any {
  const impares = arr.filter((number) => number / 2 !== 0);

  const info = {
    qtdTotal: arr.length,
    qtdImpares: impares,
  };
  return info;
}

//EXERCICIO 4

//a
type post = {
  autor: string;
  texto: string;
};

const nietzshce: post = {
  autor: "nietzsche",
  texto:
    "“The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.”",
};

const kant: post = {
  autor: "kant",
  texto: "Happiness is not an ideal of reason, but of imagination",
};

const hume: post = {
  autor: "hume",
  texto:
    "Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.",
};

const shaftersbury: post = {
  autor: "shaftesbury",
  texto:
    "It is the hardest thing in the world to be a good thinker without being a good self examiner.",
};

const fredrich: post = {
  autor: "nietzsche",
  texto:
    "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
};

const quotes = [nietzshce, kant, hume, shaftersbury, fredrich];

//b

function postsFiltrados(quotes, foo: string): [] {
  const filteredPosts = quotes.filter((quote) => quote.autor === foo);

  return filteredPosts;
}

enum Eras {
  PreHistoria = 4000,
}
