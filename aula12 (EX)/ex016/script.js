function verificar(){
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if((fano.value.length) == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var img = document.createElement('img') //criando uma tag img 
    img.setAttribute('id', 'foto') //adicionando o id='foto' a tag img 
    var gênero = ''
    if(fsex[0].checked) {
        if(idade>=0 && idade < 10) {
            gênero = 'uma criança'
            img.setAttribute('src', 'imagens/fotobebe-m.png') //setando o atributo para escolher a foto que vai aparecer.
        } else if(idade < 21){
            gênero = 'um jovem'
            img.setAttribute('src','imagens/fotojovem-m.png')
        } else if(idade < 50){
            gênero = 'um adulto'
            img.setAttribute('src', 'imagens/fotoadulto-m.png')
        } else {
            gênero = 'um idoso'
            img.setAttribute('src', 'imagens/fotoidoso-m.png')
        }
    } else if(fsex[1].checked) {
        if(idade>=0 && idade < 10) {
            gênero = 'uma criança'
            img.setAttribute('src', 'imagens/fotobebe-f.png')
        } else if(idade < 21){
            gênero = 'uma jovem'
            img.setAttribute('src','imagens/fotojovem-f.png')
        } else if(idade < 50){
            gênero = 'uma adulta'
            img.setAttribute('src', 'imagens/fotoadulto-f.png')
        } else {
            gênero = 'uma idosa'
            img.setAttribute('src', 'imagens/fotoidoso-f.png')
        }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img) //para fazer a imagem aparecer
}

}