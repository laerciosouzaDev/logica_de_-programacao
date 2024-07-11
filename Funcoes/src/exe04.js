import leia from "readline-sync"

export function exe04(){
    var vetor = []

    for(var i = 0; i < 4; i++){
        var numeroDigitado = leia.questionInt("Digite um numero: ")
        while(numeroDigitado % 2 !== 0){
            var numeroDigitado = leia.questionInt("voce digitou um numero impar: ")
        }
    }

    console.log(vetor)
}

exe04()