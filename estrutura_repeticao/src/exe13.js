import leia from "readline-sync"
var num = leia.questionInt("digite um numero inteiro: ")
var result = 1

for(var i = num; i > 0; i--){
    result = result * i
}
console.log("valor fatorial de " +num + " e igual " +result)
