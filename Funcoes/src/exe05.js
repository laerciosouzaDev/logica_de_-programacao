

export function exe05(){
    var matriz = [[]];
    var maiorDez = [];
    for(var linha = 0; linha < 8; linha++){
        matriz[linha] = [];
        for(var coluna = 0; coluna < 8; coluna++){
            matriz[linha][coluna] = parseInt(Math.random() * 100);
            if(matriz[linha][coluna] > 10)
            maiorDez.push(matriz[linha][coluna])
        }
    }
console.table(matriz)
console.log(maiorDez)
}
exe05();