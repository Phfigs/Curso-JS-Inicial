let valores = []
let res = document.getElementById('res')
let num = document.getElementById('txtn')
let sel = document.getElementById('selnum')

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { //para verificar se o número está dentro do intervalo proposto
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //para verificar se o número já está na lista(vetor)
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    sel.appendChild(item)
    res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    } 
    num.value = '' //para tirar o número da caixa de texto
    num.focus() //para fazer o cursor voltar para a caixa de texto para colocar outro número apos a adição de um número
}    

function finalizar(){
if(valores.length == 0){
    window.alert('Adicione valores antes de finalizar!')
} else {
let tot = valores.length
let menor = valores[0]
let maior = valores[0]
let soma = 0
let media = 0
for(let pos in valores){
    soma += valores[pos]
    if (valores[pos] > maior)
    maior = valores[pos]
    if (valores[pos] < menor)
    menor = valores[pos]
}
media = soma/tot
res.innerHTML = '' //para zerar o res
res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`
res.innerHTML += `<p>A média dos valores digitados é ${media}. </p>`
}
}

