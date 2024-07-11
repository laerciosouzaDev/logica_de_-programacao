import { preencherVetor } from "./ultils/preencherVetor.js";

export function exe06(){
    var jogadas = preencherVetor(100, 1, 7);

    var qtdLados = [0,0,0,0,0,0,0];

    var porcentagem = []

    for(var i = 0; i < jogadas.length; i++){
        qtdLados[jogadas[i]]++ 
    }

    for(var i = 1; i < qtdLados.length; i++){
        porcentagem[i] = 100/ jogadas.length * qtdLados[i];
        if(porcentagem[i] > 22){
            console.log("Dado viciado NO lado " + [i]+"!!!")
        }
    }

    

    console.table(porcentagem)
}

   

exe06()