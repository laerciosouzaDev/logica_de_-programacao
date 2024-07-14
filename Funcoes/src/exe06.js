// Função para gerar lançamentos do dado
export function gerarLancamentos(numLancamentos) {
    var lancamentos = [];
    for (var i = 0; i < numLancamentos; i++) {
        lancamentos.push(Math.floor(Math.random() * 6) + 1);
    }
    return lancamentos;
}

// Função para contar a frequência de cada face
export function contarFrequencia(lancamentos) {
    var frequencia = [0, 0, 0, 0, 0, 0]; // Vetor para contar as faces de 1 a 6
    lancamentos.forEach(face => {
        frequencia[face - 1]++; // Decrementa 1 para ajustar ao índice do vetor (0-5)
    });
    return frequencia;
}

// Função para calcular a porcentagem de cada face
export function calcularPorcentagens(frequencia, numLancamentos) {
    var porcentagens = [];
    for (var i = 0; i < frequencia.length; i++) {
        porcentagens[i] = (frequencia[i] / numLancamentos) * 100;
    }
    return porcentagens;
}

// Função para verificar se o dado é viciado
export function verificarVicio(porcentagens) {
    for (var i = 0; i < porcentagens.length; i++) {
        if (porcentagens[i] > 22) {
            return true;
        }
    }
    return false;
}
  

var numLancamentos = 1000;
var lancamentos = gerarLancamentos(numLancamentos);
var frequencia = contarFrequencia(lancamentos);
var porcentagens = calcularPorcentagens(frequencia, numLancamentos);
var viciado = verificarVicio(porcentagens);

console.log("Frequência de cada face:", frequencia);
console.log("Porcentagem de cada face:", porcentagens);
if (viciado) {
  console.log("O dado é viciado.");
} else {
  console.log("O dado não é viciado.");
}



    
    

