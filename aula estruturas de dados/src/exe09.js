import leia from "readline-sync"

var minimo = []

var maximo = []

for(var i = 0; i < 30; i++){
    var temp1 = parseInt(Math.random() * 23) + 12
    var temp2 = parseInt(Math.random() * 23) + 12

    if(temp1 < temp2){
        minimo.push(temp1)
        maximo.push(temp2)
    }else{
        maximo.push(temp1)
        minimo.push(temp2)
    }
}
for(var i = 0; i < 30; i++){
    var dia = (i + 1).toString
    console.log("DIA: " +dia+ (i+1) + "maxima: " + maximo[i] + "minina: " + minimo[i])
}
