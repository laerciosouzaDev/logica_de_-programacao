import leia from "readline-sync"

var valorProduto = leia.questionFloat("Valor do Produto:")

var moedas1R = leia.questionInt("Total moedas 1 Real: ")

var ciquentaCents = leia.questionInt("total Moedas 50 centavos:")

var vinteCinco = leia.questionInt("total Moedas 25 centavos:")

var dez = leia.questionInt("total Moedas 10 centavos:")

var cinco = leia.questionInt("total Moedas 5 centavos:")

var total = (moedas1R * 1) + (ciquentaCents * 0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco * 0.05)

console.log("Valor do produto= " + valorProduto )

console.log("Valor do porquinho= " + total)

var mensagem = total >= valorProduto ? "Pode comprar o produto!!" : "Junta mais dinheiro seu pobre!!!"

console.log(mensagem)

// if (total > valorProduto){
//     console.log("Pode comprar o produto!!") 
// }else{
//     console.log("Junta mais dinheiro seu pobre!!!")
// }



