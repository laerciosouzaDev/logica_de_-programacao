import leia from "readline-sync"

var list = []

for(var i = 0; i < 10; i++){
    list.push(parseInt(Math.random() * 10))
}
console.log(list)

var inicio = 0

var fim = list.length - 1

while(inicio < fim){
    var aux = list[inicio]
    list[inicio] = list[fim]
    list[fim] = aux
    
    inicio++
    fim--
}
console.log(list)

// var list = [1,2,3,4,5,6,7,8,9,10]

// var list2 = []

// for(var i = list.length - 1; i >= 0; i--){
//     list2.push(list[i])
// }
// list = list2

// console.log(list)