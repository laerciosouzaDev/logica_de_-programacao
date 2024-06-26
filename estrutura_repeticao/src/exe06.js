import leia from "readline-sync"

var numero = leia.questionInt("Digite um numero: ")

for(var i = 1; i <= 10; i++){
    var result = i * numero

    console.log( numero+ "X" +i + "=" + result)
}