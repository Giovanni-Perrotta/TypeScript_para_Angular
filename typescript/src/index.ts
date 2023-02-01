// type legend = {
//     name: string,
//     arma: string
// }


// function apex (lenda: legend){
//     console.log(lenda)
// }

// apex({
//     name: "Watsson",
//     arma: "R301"
// })
// console.log("aiaiaiaiaiaiai")




// variaveis normais
let ligado: boolean = false
let nome: string = "Gio"
let idade: number = 20

//variaveis especiais
let nulo: null = null
let indefinido: undefined = undefined

//variaveis abrangentes
let retorno: void
let tudo: any = "volta tudo, usa para quando vc não sabe oq ira retornar"

//object - sem previsibilidade
let produtoJSON:object = {
    name: "Gio",
    idade: 20,
    vivo: true,
}

//object tipado - com previsibilidade
type ProdutoLoja = {
    nome: string,
    preco: number,
    estoque: number,
}

let meuProduto: ProdutoLoja ={
    nome: "racleteira",
    preco: 1490,
    estoque: 1,
}


//arrays
let lista: string[] = ["Gio", "Julia", "Regina"]
let lista2: Array<string> = ["Felippe", "Giovanna", "Marcella"]

let infos: (string | number)[] = ["Gio", 20, "Julia", 21, "Regina", 53]

//tuplas
//                nessa ordem
let boleto:[string, number, number] = ["luz", 190, 35121653]

// arrays métodos
//TODOS OS MÉTODOS JS FUNCIONAM
lista.forEach

//datas
let aniversario:Date = new Date("2023-11-12 05:00")
console.log(aniversario.toString())

//functions
function addNumber(x: number, y:number){
    return x + y
}

let soma: number = addNumber(10, 8)
console.log(soma)

function addMensagem(name: string, mensagem: string){
    return name + ' ' + mensagem
}

let texto: string = addMensagem("Giovanni,", "tudo bem com você?")
console.log(texto)

function CalltoPhone(phone: number | string): number | string {
    return phone
}

console.log(CalltoPhone("40028922"))
console.log(CalltoPhone(40028922))

//function assincrona
async function getDataBase(id: number): Promise<number | string> {
    return "Gio"
}

//interfaces (type x interface)
type robot = {
    readonly id: number | string,
    name: string,
}

interface robot2 {
    readonly id: number | string,   //readonly não permite mudança de fora
    name: string,

    addMensagem(): string

}

const bot: robot = {
    id: 1,
    name: "NightBot",
}

const bot2: robot2 = {
    id: 2,
    name: "Vexera",
    addMensagem(): string {
        return "Batata"
    }
}

console.log(bot)
console.log(bot2)

class Pessoa implements robot2{
    id: string | number
    name: string

    constructor(id: string | number, name: string){
        this.id = id
        this.name = name
    }

    addMensagem(): string {
        return `Olá, eu sou ${this.name}`
    }

}

const p = new Pessoa (1, "Kayky")

console.log(p.addMensagem())