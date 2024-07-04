var list = []

for(var i = 0; i < 10; i++){
    list.push(parseInt(Math.random() * 30))
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