//EXERCICIO 1
// a)
var minhaString = "valor";
// minhaString = 13;
//b
var meuNumero = 14;
//d
var drummond = {
    nome: "carlos",
    idade: 118,
    corFavorita: "cinza"
};
var bandeira = {
    nome: "manuel",
    idade: 135,
    corFavorita: "azul"
};
var gullar = {
    nome: "ferreira",
    idade: 91,
    corFavorita: "vermelho"
};
//e
var CoresPermitidas;
(function (CoresPermitidas) {
    CoresPermitidas["cor1"] = "vermelho";
    CoresPermitidas["cor2"] = "laranja";
    CoresPermitidas["cor3"] = "amarelo";
    CoresPermitidas["cor4"] = "verde";
    CoresPermitidas["cor5"] = "azul";
    CoresPermitidas["cor6"] = "anil";
    CoresPermitidas["cor7"] = "violeta";
})(CoresPermitidas || (CoresPermitidas = {}));
//EXERCICIO 2
function exercicio2(foo, boo) {
    console.log("a soma dos dois números é: ", foo + boo);
    console.log("a substração do primeiro pelo segundo número é: ", foo - boo);
    console.log("a multiplicação dos dois numeros é: ", foo * boo);
    if (foo - boo > 0) {
        console.log(foo);
    }
    else {
        console.log(boo);
    }
}
function exercicio3(arr) {
    var impares = arr.filter(function (number) { return number / 2 !== 0; });
    var info = {
        qtdTotal: arr.length,
        qtdImpares: impares
    };
    return info;
}
var nietzshce = {
    autor: "nietzsche",
    texto: "“The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.”"
};
var kant = {
    autor: "kant",
    texto: "Happiness is not an ideal of reason, but of imagination"
};
var hume = {
    autor: "hume",
    texto: "Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them."
};
var shaftersbury = {
    autor: "shaftesbury",
    texto: "It is the hardest thing in the world to be a good thinker without being a good self examiner."
};
var fredrich = {
    autor: "nietzsche",
    texto: "It is not a lack of love, but a lack of friendship that makes unhappy marriages."
};
var quotes = [nietzshce, kant, hume, shaftersbury, fredrich];
//b
function postsFiltrados(quotes, foo) {
    var filteredPosts = quotes.filter(function (quote) { return quote.autor === foo; });
    return filteredPosts;
}
var Eras;
(function (Eras) {
    Eras[Eras["PreHistoria"] = 4000] = "PreHistoria";
})(Eras || (Eras = {}));
