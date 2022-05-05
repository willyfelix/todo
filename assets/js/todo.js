import { addTask, getAllTasks } from "./utils/domFunctions.js";

// Tarefas - Armazenar as tarefas em algum lugar.
// Por enquanto estamos armazenando na memória.
// usamos uma constante. Armzenamento em memória é volátil. f5 perde.
// Em localStorage e sessionStorage.

//NodeJS - MongoDB ou Firebase. Armazenamento em Banco de dados. Armazenamento persistente.

// pegar { step: "Publicar no Expo" }:
//  console.log(db[0].steps[2].step)

const db = [
  {
    id: 1,
    title: "Concluir App Conexão Arte",
    steps: [
      { step: "Ajustar textos" },
      { step: "Trocar imagens para imagens públicas" },
      { step: "Publicar no Expo" },
      { step: "Publicar no Expo Store Connect" },
    ],
    done: false,
    dueDate: "2022-05-06",
    reminder: "2022-05-02 10:00",
  },

  {
    id: 2,
    title: "Aula 4 Fiap - Avanade",
    steps: [{ step: "Atributos Globais" }, { step: "Estrutura CSS" }],
    done: true,
    dueDate: "2022-04-28",
  },
];

getAllTasks(db);

//console.log(db[0].title);
// DOM - Document Object Model - É o JavaScript acessando o HTML e manipulando ele.
// HTML ele é compilado pelo navegador em uma árvore de comandos, chamada DOM.

const newTask = document.querySelector("#inputTxtNewTask");
const form = document.querySelector("#addNewTask");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

newTask.addEventListener("keyup", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.key == "Enter") {
    if (!newTask.value) {
      alert("Digite uma nova tarefa, para adicionar.")
  } else {
    alert(newTask.value);
  }
    const d = new Date();
    const today = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;

    db.push({ id: Number(db.length) + 1, title: newTask.value, done: false, dueDate: today, });

    document.querySelector(".tasks").innerHTML = "";
    getAllTasks(db);

      newTask.value = "";
      console.log(db);
    }
});

// exemplo de array
//const frutas = ["maçã", "banana", "abacaxi", "abacate"];

// frutas[3];
// frutas.length;
// frutas[frutas.length - 1];

//console.log(frutas.at(-1));

//TypeScript
//Criando um objeto literal
//JavaScript Object Notation - JSON
// const dados = {
//   nome: "Glaucio Daniel",
//   idade: 36,
//   programador: true,
//   acao: () =>
//  {
//     console.log("Executando uma ação");
//   },
// };

//Objeto é um conjuto de atributos(propriedades ou valores) e métodos(ações ou funçõs)
//console.log(dados.nome);
//console.log("Idade: ", dados.idade);

//dados.acao();

// db.push - inserindo uma nova tarefa no array.