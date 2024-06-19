import leia from "readline-sync"

var nota = leia.questionFloat("Informe a Nota: ")

if(nota <0 || nota >10){
    console.log("Digite uma nota valida.")
}else{
    if(nota >=9.0){
        console.log("Conceit A")
    }else if(nota >= 8.0){
        console.log("Conceito B")
    }else if(nota >= 7.0){
        console.log("Conceito D")
    }else if(nota >= 6.0){
        console.log("Conceito F")
    }
}