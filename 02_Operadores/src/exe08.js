import leia from "readline-sync"

var mesDoano = leia.question("Digite o mes do ano com algarismo 01 a 12: \n")

switch(mesDoano){
    case "01":
    case "03":
    case "05":
    case "07":
    case "08":
    case "10":
    case "12":
        console.log("Esse mes tem 31 Dias!")
    break;
    case "04":
    case "06":
    case "09":
    case "11":
        console.log("Esse mes tem 30 dias!")
    break;
    case "02":
        console.log("Esse mes tem 28/29 dias!")
    break;
    default:
        console.log("caractere invalido!")       
}