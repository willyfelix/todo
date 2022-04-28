import { escreve } from "./utils/write.js";

console.log("Lets go!");
console.info("Decola go!");
console.error("Forçando um erro!");
console.warn("Forçando um alerta!");
//case sensitive - camelCase
//const - constante - Não muda. Nunca. A não ser objetos e referências, aí o seu conteúdo pode mudar.
const nome = "Williane Felix";
//let - variável - pode mudar a qualquer momento.
let email = "williane.0730@gmail.com";
//var nome
//tc39 - Grupo de Tecnologia dentro ECMA International - Responsável EcmaScript - ES2015, ....ES2017...ESNEXT - Código intermediário, traduz essa versão mais moderna para uma versão compatível.
// Transpiladores. BabelJS
console.log(`Nome: ${nome} Email: ${email}`);

if (nome == "Williane Felix") {
  console.log("é igual");
}
// hoisting

//const e let não sofrem hoisting,

escreve(`Seja bem-vindo ${nome}`);
escreve("Treinamento HTML5, CSS3 e JS");
// #############################################################################
// objeto.metodo();
// objeto.propriedade = valor;
// document é um objeto.
//window é um objeto. window.innerHeight window.innerWidth
// #############################################################################

// Em JavaScript existem 7 tipos de erros

// eval(' console.log("teste")');
// Type Error, Reference Error, Syntax Error, Eval, Range Error, Iternal Error, URIError (URI - Uniform Resource Identifier -  https://www.fiap.com.br/fiapon?id=100&teste=1)

// Type, Reference, Syntax.

// #############################################################################