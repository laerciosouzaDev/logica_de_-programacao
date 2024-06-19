import leia from "readline-sync"

var lado1 = leia.questionFloat("Digite o primeiro lado: \n")

var lado2 = leia.questionFloat("Digite o segundo lado: \n")

var lado3 = leia.questionFloat("Digite o terceiro lado: \n")

var checkA = A < (B + C)
var checkB= B < (A + C)
var checkC = C < (A + B)

if(checkA && checkB && checkC){
    console.log("nao é um triangulo.")
}else if(lado1 === lado2 && lado2 === lado3){
    console.log("equilatero")
}else if(lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3){
    console.log("escaleno")
}else{
    console.log("Isorceles")
}

