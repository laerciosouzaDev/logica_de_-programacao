import leia from "readline-sync"

var contador = 0;

do{
    var num = leia.questionInt("Digite um numero: ")
    if(num > 100 && num <200){
        contador++
    }
    console.log("Foram Digitados." + contador + " entre 100 e 200")

}while(num != 0)
