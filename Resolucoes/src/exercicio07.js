import leia from "readline-sync"

var melhorJogador;

var melhorPontuacao;

var time = []


for(var i = 0; i < 2; i++){


    
    var nome = leia.question("digite o nome do jogador: ")
    
    var qtdgols = leia.questionInt("digite a quantidade de gols: ")
    
    var passesCertos = leia.questionInt("digite a quantidade de passes certos: ")
    
    var passesErrados = leia.questionInt("digite a quantidade de passes errados: ")
    
    var pontos = (qtdgols * 50)+ (passesCertos * 10)+ (passesErrados * - 5);
    time.push({
        nome: nome,
        gols: qtdgols,
        passesCertos: passesCertos,
        passesErrados, passesErrados,
        pontos: pontos
        
    })

    // if(melhorPontuacao || pontos > melhorPontuacao){
     //   melhorJogador = nome;
     //   melhorPontuacao = pontos;
    //}
    if(i === 0){
        melhorJogador = nome;
        melhorPontuacao = pontos;
    }

    if(pontos > melhorPontuacao){
        melhorJogador = nome;
        melhorPontuacao = pontos;
    }


    if(pontos < 50){
        console.log(`${nome} fez uma pessima partida.`)
    }else if(pontos >= 50 && pontos < 100){
        console.log(`${nome} fez uma partida ruim. .`)
    }else if(pontos >= 100 && pontos < 150){
        console.log(`${nome} fez o basico. .`)
    }else if(pontos >= 150 && pontos < 200){
        console.log(`${nome} foi bem na partida. .`)
    }else{
        console.log(`${nome} jogou demais. .`)
    }

}
console.log("o melhor jogador foi: " + melhorJogador + " com " + melhorPontuacao + " Pontos. ")
console.log(time)