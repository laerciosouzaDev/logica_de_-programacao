// Vamos desenvolver um jogo pra gente se divertir um pouco com a criançada, trata-se do
// “Número mágico”. Neste jogo um número deve ser cadastrado pelo ‘mestre’ (PvP) ou sorteado
// pelo game (PvE) e o desafiante deve tentar adivinhar. A cada tentativa incorreta o sistema
// informa se o chute foi mais alto ou mais baixo que o número mágico. Quando o desafiante
// acertar o game informar em quantas tentativas ele conseguiu. No início do jogo o jogador
// escolhe entre PvP e PvE.
// - Sistema de dificuldade para o PvE, onde o jogador escolhe a dificultade e ela
// influencia o tamanho do range possível para o número mágico.

import leia from "readline-sync"

// var i = leia.keyInSelect(["digite 1 Pvp ", "digite 2 Pve"])


var numMagico = (Math.floor(Math.random() * 10))

var palpite = 0

var tentativa = 0

while(palpite != numMagico){
    var palpite = numMagico = leia.questionInt("digite seu palpite: ")
    tentativa = tentativa +=1

    if(palpite == numMagico){
        console.log("voce acertou o numero em " + tentativa + " tentativa(s)")
    }else if(palpite < numMagico){
        console.log("voce errou tente um valor maior.")
    }else{
        console.log("voce errou tente um valor menor")
    }
}