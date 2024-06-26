import leia from "readline-sync"

// var valor = leia.questionInt("digite o valor: ")

// while(valor <= 15){
//     console.log(valor)
    
// }
var maior

var menor

for(var i = 0; i < 5; i++){
    var num  =leia.questionInt("Digite um numero: ")

    if(i === 0){
        menor = num
        maior = num
    }


    if(num < menor || menor === undefined){
        menor = num
    }

    if(num > maior|| maior === undefined){
        maior = num
    }
}
console.log("menor numero: "+ menor)
console.log("maior numero: " +maior)

