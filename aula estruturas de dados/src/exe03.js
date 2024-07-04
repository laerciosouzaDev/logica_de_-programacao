import leia from "readline-sync"

var list = []

var soma = 0

var i = 0 

while(i < 5){
    var numeroAleatorio =  parseInt(Math.random()* 10)
    list.push(numeroAleatorio)
    i++

}

for(var j = 0; j < list.length; i++){
    soma = soma + list[j]
}
console.log("valor da soma e: " +soma)

for(var valor of list){
    console.log(valor)
}