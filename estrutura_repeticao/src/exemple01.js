var estaCarregando = true

var porcentagem = 0

while(estaCarregando){
    console.log(porcentagem + " % Carregando...")

    if(porcentagem < 100){
        porcentagem += 10
    }else{
        estaCarregando = false
    }
    

}