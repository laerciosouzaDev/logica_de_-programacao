import leia from "readline-sync"

var Macas = leia.questionFloat("digite quantas macas: ")
var totalMacas = 0

if(Macas<12){
    totalMacas = (Macas * 0.30)
    console.log("Voce deve pagar R$: " + totalMacas)
} else{ totalMacas = (Macas * 0.25)
    console.log("Voce deve pagar R$: " + totalMacas)
    
}