import leia from "readline-sync"

var listPai = []

var listMae = []

var listFilho = []

for (var i = 0; i < 50; i++){
    listPai[i] = parseInt(Math.random() * 50)
    listMae[i] =  parseInt(Math.random() * 50)

}
for(var i = 0; i < listFilho.length; i++){
    if(listPai %2 === 0){
        listFilho.push(listPai[i])
    }else{
        listFilho.push(listMae[i])
    }

}
console.log(listPai)
console.log(listMae)
console.log(listFilho)