import leia from "readline-sync"

// function teste(){
//     var nome = leia.question("digite o nome: ")
//     console.log("ola, " + nome)
// }

function somar(){
    var num1 = leia.questionInt("digite um numero; ")
    var num2 = leia.questionInt("digite um numero; ")
    var result = num1 + num2
    console.log("O resultado e: " + result)

}
// sem retorno e com parametro
function subtrair(num1,num2){
    var result = num1 - num2
    console.log("o resultado e: " + result)
}
//com retorno e com parametro
function mult(num1,num2){
    var result = num1 * num2

    return result
}


somar()
subtrair(40,8)
var result = mult(5,5)

console.log(result)
