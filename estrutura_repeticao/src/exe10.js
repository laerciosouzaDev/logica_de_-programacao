import leia from "readline-sync"

var altValentina = 1.50

var altJoao = 1.40

var ano = 0

while(altValentina >= altJoao){
    altJoao += 0.03
    altValentina += 0.02
    ano++
}
console.log("altura valentina. " + altValentina.toFixed(2))
console.log("Altura Joao " + altJoao.toFixed(2))
console.log("Demora " + ano + " anos para joao ser maior que valentina ")