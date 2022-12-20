function contar(){
    var ini = document.querySelector('input#ini')
    var fim = document.querySelector('input#fim')
    var pas = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
    res.innerHTML = 'Impossível contar!'
} else {
    var pas = Number(pas.value)
    var fim = Number(fim.value)
    var ini = Number(ini.value)
    res.innerHTML = 'Contando: <br>'
    if(pas<=0){
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
if(ini < fim){
    //CONTAGEM CRESCENTE
    for(num = ini; num <= fim; num+=pas){ 
        res.innerHTML += `${num} \u{1F449}`
    }
} else {
    //CONTAGEM DECRESCENTE
    for(num = ini; num >= fim; num -=pas){
        res.innerHTML += `${num} \u{1F449}`
    }
}
res.innerHTML += '\u{1F3C1}'
}
}
