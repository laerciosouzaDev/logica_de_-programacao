import leia from "readline-sync"

console.log("Iforme o valor da sua doacao R$:")
console.log("1 - Para R$ 10,00")
console.log("2 - Para R$ 25,00")
console.log("3 - Para R$ 50,00")
console.log("4 - Outros Valores")

var opcao = leia.question("Infome a opcao")

if(opcao === "1"){
    console.log("Voce doou R$ 10,00 Reais! Muito Obrigado!!!")
}else if(opcao === "2"){
    console.log("Voce doou R$ 25,00 Reais! Muito Obrigado!!!")
}else if(opcao === "3"){
    console.log("Voce doou R$ 50,00 Reais! Muito Obrigado!!!")
}else if(opcao === "4"){
    var valor = leia.question("Informe o valor que deseja doar: ")
}else{
    console.log("Opcao Invalida!!")
}

