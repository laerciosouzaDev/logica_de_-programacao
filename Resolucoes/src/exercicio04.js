import leia from "readline-sync"

var texto = leia.question("DIGITE UMA PALAVRA: ");

texto = texto.toLocaleUpperCase();

var contadorVogais = 0;

for(var i = 0; i < texto.length; i++){

    if(texto[i] === 'A' || texto[i] === 'E' || texto[i] === 'I' || texto[i] === 'O' || texto[i] === 'U'){
        contadorVogais++
    }
}console.log(`Esse texto tem: ${contadorVogais} Vogais `)