//parte 1
let numero1 = 7
let numero2 = 19
let resultado = numero1 + numero2

let nome = 'Henrique'

let VouF = 3>2

const PI = 3.1415

console.log(`número1= ${numero1}`);
console.log(`número2= ${numero2}`);
console.log(`resultado= ${resultado}`);
console.log(`nome= ${nome}`);
console.log(`Verdadeiro ou Falso? = ${VouF}`);
console.log(`valor de pi= ${PI}`);

console.log(typeof numero1);
console.log(typeof numero2);
console.log(typeof resultado);
console.log(typeof nome);
console.log(typeof VouF);
console.log(typeof PI);

//parte 2

let aluno = prompt(`Qual é o seu nome?`).toUpperCase()
let idade = prompt(`quantos anos você tem?`)
let bairro = prompt(`em qual bairro você mora?`)
alert(`Bem vindo ${aluno}`)

let numero3 = parseInt(prompt(`digite um número:`))
let numero4 = parseInt(prompt(`digite um segundo numero:`))
let resultado2 = numero3 + numero4

alert(`O resultado da soma deu: ${resultado2}`)

//parte 3

let nome1 = prompt(`qual é o seu nome?:`);
let sobrenome = prompt(`qual é o seu nome do meio?`);
let sobrenome2 = prompt(`qual é o seu ultimo nome?`)

alert(`nome: ${nome1} ${sobrenome2} ${sobrenome}`)

//parte 4

let preço = 15
let desconto = 0.2
let preçofinal = preço - (preço*desconto)

console.log(`Preço final: ${preçofinal}`);
console.log(typeof desconto);