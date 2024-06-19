import leia from "readline-sync"

var idade = leia.questionInt("Informe sua idade: ")
if(idade < 18){
    var permission = leia.question("Seus pais permitem a sua Viagem\n 1- Sim\n 2- Nao")
    if(permission ==="1"){
        var nome = leia.question("Infome seu nome")
        console.log("Voce pode viajar tranquilo" + nome)
    }else if(permission === "2"){
        console.log("Nao tem permissao para viajar")
    }else{
        console.log("Opcao Invalida")
    }
}else{
    var nome = leia.question("Infome seu nome: ")
    console.log("Voce pode viajar de boa." + nome)
}