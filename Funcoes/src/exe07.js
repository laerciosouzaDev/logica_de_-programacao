import leia from "readline-sync"

export function exe07(){

    var gabarito = [];
    
    var respostaProva = [];

    var notaAluno = 0;

    for(var i = 0; i < 10; i++){
        gabarito[i] = leia.question("Infome a resposta para o gabarito: " + (i + 1));
 
    }

    console.log("digite suas respostas: ");

    for(var i = 0; i < 10; i++){
        respostaProva[i] = leia.question("Informe a resposta da questao: ");
    }

    for(var i = 0; i < gabarito.length; i++){
        if(gabarito[i] === respostaProva[i]){
            notaAluno++
        }
    }
    
    console.table(gabarito[i])
    console.table(respostaProva)
    console.log(notaAluno)
}
exe07();


