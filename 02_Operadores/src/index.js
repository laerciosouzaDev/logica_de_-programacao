import leia from "readline-sync"

var corrida1 = (leia.questionFloat("Digite o Valor da primeira corrida:  "))

var corrida2 = (leia.questionFloat("Digite o Valor da segunda corrida:  "))

var corrida3 = (leia.questionFloat("Digite o Valor da terceira corrida:  "))

var corrida4 = (leia.questionFloat("Digite o Valor da quarta corrida:  "))

var corrida5 = (leia.questionFloat("Digite o Valor da quinta corrida:  "))

var valorTotal = corrida1 + corrida2 + corrida3 + corrida4 + corrida5

var totalDesc =  valorTotal - (valorTotal * 0.25)


console.log ("valor arrecadado $: " + totalDesc + "%")

