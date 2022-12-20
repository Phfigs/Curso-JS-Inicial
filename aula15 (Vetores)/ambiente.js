let num = [5,8,4]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
/*
for(let i=0; i<num.length;i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/
for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
let pos = num.indexOf(8)
if(pos == -1){
    console.log('Nesse vetor não foi encontrado esse valor.')
} else {
    console.log(`O valor está na posição ${pos}`)
}
