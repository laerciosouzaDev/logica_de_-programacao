import leia from "readline-sync"

var nomeFunc = leia.question("Nome do Funcionario: \n")

var salarioFixo = leia.questionInt("Digite o Salario: \n")

var dependentes = leia.questionInt("Digite a quantidade de Dependentes: \n")


switch(dependentes){
    case 0:
        var totalSalario = salarioFixo * 1.02
        console.log("O salario do funcionario(a) " + nomeFunc + " e R$: " + totalSalario)
    break;
    case 1:
        var totalSalario = salarioFixo + (salarioFixo * 0.05)
        console.log("O salario do funcionario(a) " + nomeFunc + " e R$: " + totalSalario)
    break;
    case 2:
        var totalSalario = salarioFixo + (salarioFixo * 0.07)
        console.log("O salario do funcionario(a) " + nomeFunc + " e R$: " + totalSalario)
    case 3:
            var totalSalario = salarioFixo + (salarioFixo * 0.10)
            console.log("O salario do funcionario(a) " + nomeFunc + " e R$: " + totalSalario)
        break;
    default:
            var totalSalario = salarioFixo + (salarioFixo * 0.15)
            console.log("O salario do funcionario " + nomeFunc + " e R$: " + totalSalario)
    



}
