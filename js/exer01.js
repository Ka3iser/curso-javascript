let aluno = prompt(`digite seu nome:`);
let nota01 = parseFloat(prompt(`digite sua nota 1`));
let nota02 = parseFloat(prompt(`digite sua nota 2`));
let media = (nota01 + nota02) / 2;

alert(`suas notas finais são ${media}`)

const mediaAp = 7;
let res = media >= mediaAp;

alert(`aluno aprovado? ${res}`)