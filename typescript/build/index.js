"use strict";
// type legend = {
//     name: string,
//     arma: string
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// function apex (lenda: legend){
//     console.log(lenda)
// }
// apex({
//     name: "Watsson",
//     arma: "R301"
// })
// console.log("aiaiaiaiaiaiai")
// variaveis normais
let ligado = false;
let nome = "Gio";
let idade = 20;
//variaveis especiais
let nulo = null;
let indefinido = undefined;
//variaveis abrangentes
let retorno;
let tudo = "volta tudo, usa para quando vc não sabe oq ira retornar";
//object - sem previsibilidade
let produtoJSON = {
    name: "Gio",
    idade: 20,
    vivo: true,
};
let meuProduto = {
    nome: "racleteira",
    preco: 1490,
    estoque: 1,
};
//arrays
let lista = ["Gio", "Julia", "Regina"];
let lista2 = ["Felippe", "Giovanna", "Marcella"];
let infos = ["Gio", 20, "Julia", 21, "Regina", 53];
//tuplas
//                nessa ordem
let boleto = ["luz", 190, 35121653];
// arrays métodos
//TODOS OS MÉTODOS JS FUNCIONAM
lista.forEach;
//datas
let aniversario = new Date("2023-11-12 05:00");
console.log(aniversario.toString());
//functions
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(10, 8);
console.log(soma);
function addMensagem(name, mensagem) {
    return name + ' ' + mensagem;
}
let texto = addMensagem("Giovanni,", "tudo bem com você?");
console.log(texto);
function CalltoPhone(phone) {
    return phone;
}
console.log(CalltoPhone("40028922"));
console.log(CalltoPhone(40028922));
//function assincrona
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Gio";
    });
}
const bot = {
    id: 1,
    name: "NightBot",
};
const bot2 = {
    id: 2,
    name: "Vexera",
    addMensagem() {
        return "Batata";
    }
};
console.log(bot);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addMensagem() {
        return `Olá, eu sou ${this.name}`;
    }
}
const p = new Pessoa(1, "Kayky");
console.log(p.addMensagem());
