import leia from "readline-sync"
var num = leia.question("digite o numero: ")

for(var i = num; i >= 0; i--){
    console.log("numero informado e: " + i)
}