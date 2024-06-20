import leia from "readline-sync"

var nota = leia.questionFloat("Digite a nota: ")

while(nota < 0.0 || nota > 10.0){
    console.log("Nota Invalida")

    nota = leia.questionFloat("Digite a nota novamente: ")
}
console.log("Nota valida")




// do {

// }while()

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }