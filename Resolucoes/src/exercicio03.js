import leia from "readline-sync"
//terminar em casa
var opcao = leia.keyInSelect([
    "C -> K",
    "K -> C",
    "F -> C",
    "C -> F",
    "K -> F",
    "F -> K",
]) + 1;

var temp = leia.questionFloat("Digite a temperatura: ");

switch(opcao){
    case 1:
        var K = temp + 273.15;
        console.log(`Valor Kelvin: ${K}` );
        break;
    case 2:
        var C = temp - 273.15;
            console.log(`Valor Kelvin: ${C}` );
            break;
    case 3:
        var F = temp + 273.15;
        console.log(`Valor Kelvin: ${F}` );
        break;
}