import leia from "readline-sync"

// var nota1 = leia.questionInt("digite a primeira nota: ");

// var nota2 = leia.questionInt("digite a segunda nota: ");

// var nota3 = leia.questionInt("digite a terceira nota: ");

// var nota4 = leia.questionInt("digite a quarta nota: ");

// var nota5 = leia.questionInt("digite a quinta nota: ");

// var nota6 = leia.questionInt("digite a sexta nota: ");

// var maior = nota1;

// var menor = nota1;

// if(nota2 > maior){
//     maior = nota2;
// }

// if(nota3 > maior){
//     maior = nota3;
// }

// if(nota4 > maior){
//     maior = nota4;
// }

// if(nota5 > maior){
//     maior = nota5;
// }

// if(nota6 > maior){
//     maior = nota6;
// }

// if(nota2 < menor){
//     maior = nota2;
// }

// if(nota3 < menor){
//     maior = nota3;
// }

// if(nota4 < menor){
//     maior = nota4;
// }

// if(nota5 < menor){
//     maior = nota5;
// }

// if(nota6 < menor){
//     maior = nota6;
// }

// var soma = nota1+ nota2+ nota3+ nota4+ nota5+ nota6;

// soma -= maior + menor;

// var media = soma / 4;

// console.log("media e: " + media)



var notas =[];

for(var i = 0; i < 6; i++){
    notas.push = leia.questionInt(` digite a ${i + 1} nota: `);
}

var maior = Math.max(...notas)

var menor = Math.min(...notas)

var soma = 0

for(var i = 1; i < 5; i++){
    soma += notas[i]
}

soma = soma -(maior + menor)

var media = soma /4

console.log(`media: ${media}`)


