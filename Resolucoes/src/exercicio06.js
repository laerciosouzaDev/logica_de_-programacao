import leia from "readline-sync"


var roleta = 0;

var verde = 0;

var vermelho = 0;

var preto = 0;

const tentativas = 1000;



for(var roleta = 0; roleta < 1000; roleta++){
    var valorSorteado = parseInt(Math.random() * 37)

    if(valorSorteado === 0){
        verde++;
    }else if(valorSorteado % 2 == 0){
        preto++;

    }else{
        vermelho++;
    }


}

var vermelhoPorcent = (vermelho / tentativas)* 100;

var verdePorcent = (verde / tentativas)* 100;

var pretoPorcent = (preto / tentativas)* 100;

console.log(`vermelho qtd:  ${vermelho} - porcentagem ${vermelhoPorcent}`)

console.log(`verde qtd: ${verde} - porcentagem ${verdePorcent}`)

console.log(`preto qtd: ${preto} - porcentagem ${pretoPorcent}`)

if(verdePorcent > 40 || vermelhoPorcent > 40 || pretoPorcent > 40){
    console.log("pode esta viciada.")
}else{
    console.log("nao tem chance de esta viciada!!")
}

// abaixo o mesmo exercicio com funcoes etc..

// function calcularPorcentagens(vezesQueCaiu){
//     return (vezesQueCaiu / tentativas) * 100;
// }
// var roleta = 0;

// var verde = 0;

// var vermelho = 0;

// var preto = 0;

// const tentativas = 1000;

// function selecionaContador(valor){
//     if(valor === 0){
//         verde++;
//     }else if(valor % 2 == 0){
//         preto++;

//     }else{
//         vermelho++;
//     }
// }

// for(var roleta = 0; roleta < 1000; roleta++){
//     var valorSorteado = parseInt(Math.random() * 37)

// }

// var vermelhoPorcent = calcularPorcentagens(vermelho);

// var verdePorcent = calcularPorcentagens(verde);

// var pretoPorcent = calcularPorcentagens(preto);

// console.log(`vermelho qtd:  ${vermelho} - porcentagem ${vermelhoPorcent}`)

// console.log(`verde qtd: ${verde} - porcentagem ${verdePorcent}`)

// console.log(`preto qtd: ${preto} - porcentagem ${pretoPorcent}`)

// if(verdePorcent > 40 || vermelhoPorcent > 40 || pretoPorcent > 40){
//     console.log("pode esta viciada.")
// }else{
//     console.log("nao tem chance de esta viciada!!")
// }

