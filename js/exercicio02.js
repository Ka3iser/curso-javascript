let titulo = window.document.getElementById('h1')
titulo.style.backgroundColor = 'pink'

let paragrafo =window.document.getElementsByTagName('p');

for(let i = 0; i < paragrafo.length; i++){
    paragrafo[i].style.color = 'green'
};

let lista = window.document.getElementsByTagName('li');

for(let i = 0; i < lista.length; i++){
    lista[i].style.color = 'red'
};