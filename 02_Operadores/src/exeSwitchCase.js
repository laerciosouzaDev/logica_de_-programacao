import leia from "readline-sync"

/// IF //// ELSE

//var numero = 0


/*if(numero > 0) {
    console.log("NUMERO POSITIVO....")

}else if(numero < 0) {
    console.log("NUMERO NEGATIVO....")

}else {
    console.log("O NUMERO É 0.")
}


var x = 10

if(x < 100){
    console.log("Menor que cem")
    
}if(x < 1000) {
    console.log("Menor que mil")
}
*/
var codigoErro = leia.questionInt("digite o codigo de erro: ")
switch (codigoErro) {
    case 400:
    case 401:
    case 404:        
        console.log("codigo de erro app")
        break;
    case 500:
    case 501:
    case 502:        
        console.log("codigo de erro servidor")
        break;
    default:
        console.log("não é erro")
        break;    
}