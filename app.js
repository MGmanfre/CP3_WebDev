const form = document.getElementById('form')
const nomeProd = document.getElementById('nomeProd')
const precoProd = document.getElementById('precoProd')
const categoriaProd = document.getElementById('categoriaProd')
const btnCadProd = document.getElementById('btnCadProd')
const cadastros = document.getElementById('cadastros')
const msgErro = document.getElementById('msgErro')

btnCadProd.addEventListener('click', function (e) {
    e.preventDefault()
    let produto = nomeProd.value
    let preco = precoProd.value
    let precoFormatado = parseFloat(preco).toFixed(2)
    let categoria = categoriaProd.value

    if (produto === '' || preco === '' || categoria === '???' || preco < 0) {
        msgErro.textContent = "Valores inseridos inválidos!"
        msgErro.style.color = 'red'
        return
    }

    const cardProduto = document.createElement('ul')
    cardProduto.innerHTML = `
        <li id="${categoria}">Produto: ${produto} - R$ ${precoFormatado} - categoria: ${categoria}</li>
    `

    cadastros.append(cardProduto)
    form.reset()
});
