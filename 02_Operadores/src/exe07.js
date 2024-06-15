import leia from "readline-sync"

var salario = leia.questionInt("Digite o salario: \n" )

var valorEmp = leia.questionInt("valor do emprestimo: \n")

var valorParc = leia.questionInt("quantas parcelas: \n")

var total = (valorEmp / valorParc)

var valorMagem = (salario * 0.30)

console.log("limite de Parcelas R$" + valorMagem.toFixed(2))

