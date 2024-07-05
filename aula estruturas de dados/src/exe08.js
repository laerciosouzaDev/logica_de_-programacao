import leia from "readline-sync"

var listPai = []

var listMae = []



for (var i = 0; i < 50; i++){
    listPai[i] = parseInt(Math.random() * 100)
    listMae[i] =  parseInt(Math.random() * 100)


}
var listFilho = []
for(var i = 0; i < 50; i++){
    if(listPai[i] %2 === 0){
        listFilho.push(listPai[i])
    }else{
        listFilho.push(listMae[i])
    }

}
console.log("[index] - [pai] - [mae] - [filho]"  )

console.log("[" + listPai +"] -" "[" + listMae + "] -")

