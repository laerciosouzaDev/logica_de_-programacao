import leia from "readline-sync"

var placa = leia.question("digite o final da placa: ")

var finalPlaca = placa.charAt(placa.length-1)



switch(finalPlaca){
    case "0":
    case "1":
       console.log("Não pode Rodar na segunda-feira")
   break;
   case "2":
    case "3":
       console.log("Não pode Rodar na terca-feira")
   break;
   case "4":
    case "5":
       console.log("Não pode Rodar na quarta-feira")
   break;
   case "6":
    case "7":
       console.log("Não pode Rodar na quinta-feira")
   break;
   case "8":
    case "9":
       console.log("Não pode Rodar na sexta-feira")
   break;
   default:
    console.log("Não se aplica.")

   
}

