/**
 * Função nominal com parâmetro obrigatório
 *
 * undefined é um tipo de valor que não existe.
 * null é um tipo de valor invalido.
 * 
 * uma função sem return é uma subrotina.
 */

/*function escreva(nome, sobrenome) {
    const a = sobrenome;
    if (a === null) {
        console.log("a é nulo")
        console.log("valor de a", a, "\n")
        console.log("valor de sobrenome", sobrenome, "\n")
    }
    console.log(`${nome} ${sobrenome}`);
}

escreva("Williane");

function soma(a,b) {
    return Number(a) + Number(b);
}

const resultado = soma(1,2);

console.log(soma(3, 5));
/** 
 * expressão de função = uma função é atribuída a um contexto por exemplo uma variável.
*
const exibe = function (x) {
    return `Exibindo parâmetro ${x}`
}

console.log(exibe("chocolate"))

/**
 * Onde o JavaScript está sendo executado? qual contexto?
 * Contexto: Navegador. this depende do contexto.
 * no navegador o thus é a window
 * 
 * mas se estiver usando a versão restrita do js o this não será a window.
 *

function quemEoThis() {
    console.log(this === window)
}
function quemEoThisEstrito() {
    //quando queremos usar o js na versão mais polida, o use strict deve ser informado no início.
    "use strict";
    console.log("strict");
    console.log(this === window);
}

quemEoThis();
quemEoThisEstrito();

function Exibe2() {
    this
}*/

//OBJETO GLOBAL
let empresa = this; //WINDOW

const aluno = {
    nome: "Williane",
    matricula: 123,
    executar: function () {
        return `Exibindo de dentro de um método ${this.nome}`;
    },
};

console.log(aluno.executar());

/*function globalObj() {
    /*"use strict";*
    return this;
}
window.document.write("<h2> Escrevendo no Body</h2>");
document.write(globalObj());

globalObj().alert("CAZÁ!!");*/