const buscaCep = async () => {
    const cep = document.querySelector('#cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const valoresEndereco = await fetch (url)
    const valores = await valoresEndereco.json();
    console.log(valores);
    passavalor(valores)
};

document.querySelector('#cep').addEventListener('focusout', buscaCep);

function passavalor(valores) {
    let endereco = document.querySelector(`#endereço`)
    endereco.value = valores.logradouro
    let bairro = document.querySelector(`#bairro`)
    bairro.value = valores.bairro
    let ibge = document.querySelector(`#IBGE`)
    ibge.value = valores.ibge
}
