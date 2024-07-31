import leia from "readline-sync"

var palavra = leia.question("Digite a palavra: ");

var palavraInvertida = "";


for(var i = palavra.length -1; i >= 0; i--){
    //palavraInvertida.push(palavra[i])
    palavraInvertida = palavraInvertida + palavra[i];
    
}
if(palavra === palavraInvertida){
    console.log("E palindromo!!")
}else{
    console.log("não é palindromo!!")
}



//palavraInvertida.join().replaceAll("","");