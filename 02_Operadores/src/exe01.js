import leia from "readline-sync"
//
//var senha = leia.questionInt("digite sua aenha: ")
//
//switch(senha){
 //   case 1234:
//        console.log("Acesso Permitido")
 //   break;
 //   default:
 ////   console.log("Acesso Negado.")
 //   break;
//}

var senha = leia.questionInt("digite sua senha: ");

if(senha === 1234){
    console.log("Acesso permitido.")
}
    else{
        console.log("Acesso Negado.")
    }
