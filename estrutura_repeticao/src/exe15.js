import leia from "readline-sync"

var decimal = leia.questionInt("digite um numero: ")

var bin = ""

while(decimal >= 1){
    var result = parseInt(decimal / 2)
    var resto = decimal % 2
    decimal = result
    bin = resto + bin
}
console.log(bin)