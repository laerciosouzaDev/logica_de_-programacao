import leia from "readline-sync"

var ano = leia.questionInt("Infome o ano:")

if((ano % 4 === 0 && ano %100 !== 0) || ano %400 === 0){
    console.log(ano + " E um ano bisexto ")

}else{
    console.log(ano + " Nao e bisexto. ")
}