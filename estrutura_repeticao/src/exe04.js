import leia from "readline-sync"

var valor = leia.questionInt("digite o valor: ")

while(valor > 0){
    console.log(valor)
    valor -=1
}

