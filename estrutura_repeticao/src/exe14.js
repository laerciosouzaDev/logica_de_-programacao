import leia from "readline-sync"

var num = leia.questionInt("digite ate qual valor quer: ")

var anterior = 0

var atual = 1

var prox

var result = "0 - 1"

for(var i = 2; i < num; i++){
    prox = anterior + atual
    anterior = atual
    atual = prox
    result = result + "-" + prox
    
}
console.log(result)