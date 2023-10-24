
//REVISÃO
// recapitulando a aula passada
// console.log(msg,num1)
// let again = msg + num1
// console.log(again)

let num1 = 2
const num2 = 3
var msg = "Ola Amigos ! esse é o numero: "


function soma () {
    let resultado = num1 + num2
    console.log(msg, resultado)
}

soma()

function somaComParametros(valor1, valor2){
    console.log("O Resultado é:", valor1 + valor2)
}

somaComParametros(300,125)

// Segunda maneira de declarar uma função, pode-se associar essa funçao a uma variável
// => forma rápida de declarar funçõa

const multiplicacao = (n1, n2) => {
    return n1*n2
}

console.log(multiplicacao(2, 3))

let usuario = {
    nome: "Damiao",
    idade: 41,
    signo: "touro",
    calvo: false
}

console.log (typeof usuario)
console.log (
    "nome:", usuario.nome,
    "\n idade", usuario.idade
)
console.log(typeof usuario.calvo)

const nomes = ["Joao", "Damiao"]

console.log(nomes)
console.log(typeof nomes)
console.log(nomes[0])

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = ''
if(typeof n1 == 'number' && typeof n2 == 'number') {
    resultNovaFunc = n1 + n2
    return "Resultado:", resultNovaFunc
}
return "Valores de entrada invalidos"
}

console.log(somaMelhorada(6, 9))
console.log(somaMelhorada(6, "98"))



// return entrega o que foi pedido e para não exucuta s demais linhas