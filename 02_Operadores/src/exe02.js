import leia from "readline-sync"

var number = leia.questionInt("digite um numero: ")

if(number % 2 === 0 ) {
    console.log("Numero Par.")
}
else{
    console.log("Numero Impar")
    }