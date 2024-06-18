import leia from "readline-sync"

var timeA = leia.questionInt("Digite a quantidade de gols time A: ")

var timeB = leia.questionInt("digite a quantidade de gols time B:")

var dif = (timeA - timeB)

// switch(dif){
//     case 0:
//         console.log("EMPATE.")
//     break;
//     case 1:
//     case 2:
//     case 3:
//         console.log("JOGO NORMAL!")
//     break;
//     default :
//         console.log("QUE GOLEADA!!!")
// }

if (dif === 0 ){
    console.log("EMPATE!!")
}

if(dif  > 1 && 3 ){
    console.log("JOGO NORMAL!")
}else{
    console.log("QUE GOLEADA!!!")
}