import leia from "readline-sync"

var numero =[]

for(var i = 0; i < 3; i++){
numero[i] = leia.questionInt("informe os 3 numeros: " + (i + 1) + " : ")

}

var numeroOrdenado = numero.sort()

console.log(numeroOrdenado)

// var a = leia.questionInt("digite o primeiro numero: ")

// var b = leia.questionInt("digite o segundo numero: ")

// var c = leia.questionInt("digite o terceiro numero: ")

// if(a < b && b < c){
// console.log(a,b,c)

// }else if(a < c && c < b){
//     console.log(a,c,b)

// }else if(b < a && a < c){
//     console.log(b,a,c)
// //-----------------------------------
// }else if(c < a && a < b){
//     console.log(c,a,b)

// }else if(b < c && c < a){
//     console.log(b,c,a)

// }else{
//     console.log(c,b,a)
// }

//arrumar o codigo abaixo

// var aux
// if(a > b){
//     aux = a
//     b = a
//     b = aux

// }

// if(a > c){
//     aux = a
//     c = a
//     c = aux

// }

// if(b > c){
//     aux = b
//     b = c
//     c = aux

// }
// console.log(a,b,c)

