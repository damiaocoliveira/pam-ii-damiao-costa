var variavel1 = "olá";
let variavel2 = 3;
const variavel3 = 8;

console.log("Olá mundo!");
console.log(variavel1+"mundo"); //concatena mas deixa junto
console.log(variavel1,"mundo"); //concatena mas deixa esspaço
console.log(variavel1 + "Turminha do "+ variavel2+ "° ano")

console.log(variavel2+variavel3);
console.log(variavel2-variavel3);
console.log(variavel2*variavel3);
console.log(variavel2/variavel3);


//typeof + variavel = função dentro do java scrip "mostra o tipo de" 
console.log(typeof variavel1);
console.log(typeof variavel2);

//Em muitas linguagens, quando a variavél aparece entre chaves é um objeto. Exemplo carro é o objeto e as características atributos
const pessoa = {
    nome:"João",
    signo:"Escorpião",
    idade:35
}
//para mostra o objeto
console.log(pessoa)

//para mostrar as propriedades do objeto
console.log(
    "Nome:", pessoa.nome,
    "\nIdade:",pessoa.idade
)

let cachorros = ["Bug", "Zeus", "Zara"]
console.log(cachorros[1])



//++++++++++++++++++++++++++++++++++++++++++++++++

//var = sera vista em todo codigo dentro e fora de uma função - global
//let = dentro do bloco do codigo
//const = constatante- é global - não pode alterar ovalor dentro dela - ela é vista dentro e fora da função
//const = começa com um valor e morre com o mesmo valor, não pode ser alterado

//ATALHOS
//cltr + alt + n = executa o codigo
//cltr + ; = comentar a linha de codigo de uma vez