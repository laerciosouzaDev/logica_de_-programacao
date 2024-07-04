import leia from "readline-sync"

var num = []
// preenche a primeira lista (num)

var valor = []
for(var i = 0; i < 3; i++){
    num[i] = leia.questionInt("digite valor: ")
    // valor [i] = num [i] * 5
}

// manipular as lista
for(var i = 0; i < num.length; i++){
    valor [i] = num [i] * 5

//     valor.push(num[i] * 5)
}



console.log(num, valor)