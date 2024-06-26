import leia from "readline-sync"

// const valor = 0.33

// var copia = 1

// while(copia <=500){
//     var total = copia * valor.toFixed(2)
//     console.log(copia+ " copia(s) custa(m) R$ " +total )
//     copia++
    
// }

for(var copia = 1; copia <=500; copia++){
    var total = copia * 0.33
    console.log(copia + " Copia " + total.toFixed(2) )
}