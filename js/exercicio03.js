function calculomedia(){
    let nota01 = Number(document.querySelector('#nota01').value)
    let nota02 = Number(document.querySelector('#nota02').value)
    let respostaTela = document.querySelector('#resposta')
    mediaAluno = (nota01 + nota02) / 2
    respostaTela.innerHTML = `a média do aluno é: ${mediaAluno}`
}