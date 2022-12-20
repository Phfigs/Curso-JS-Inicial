let ver = []
let res = document.getElementById('res')
let num = document.getElementById('txtn')
let sel = document.getElementById('selnum')
function adicionar(){
    let n = Number(num.value)   
    res.innerHTML = ''
    if(num.value.length == 0) {
        window.alert('[ERRO] digite um número!')
    }else if(n > 100 || ver.indexOf(n) != -1){
        window.alert('Número inválido ou já existente, permitido somente números entre 1 e 100')
    } else if(ver.indexOf(n) == -1){
        ver.push(n)
        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        item.value = `${n}`
        sel.appendChild(item)
        }
    }
    
function finalizar(){
    if(num.value.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
    function sortfunction(a,b){
        return (a-b)
    }
    ver.sort(sortfunction)
    let numele = ver.length
    let max = (numele-1)
    let maior = ver[max]
    let soma = 0
    for(i=0; i<numele; i++){
        soma += ver[i]
    }
    media = (soma/numele)
    res.innerHTML = `Ao todo, temos ${numele} números cadastrados <br>`
    res.innerHTML += `O maior valor informado foi ${maior}. <br>`
    res.innerHTML += `O menor valor informado foi ${ver[0]} <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
    res.innerHTML += `A média dos valores digitados é ${media}.`
    }
}
