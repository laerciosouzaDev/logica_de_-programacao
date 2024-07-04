import leia from "readline-sync"

var list = []
var maioresDez = []

for(var i = 0; i < 10; i++){
    list [i] = parseInt(Math.random()* 20)
   
    }
for(var i = 0; i < list.length; i++)
    if(list[i] > 10){
        maioresDez.push(list[i])
    }
console.log(list)
console.log("somente maior que 10: " + maioresDez)