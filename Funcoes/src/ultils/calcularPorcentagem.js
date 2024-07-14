function calcularPorcentagens(frequencia, numLancamentos) {
    let porcentagens = {};
    for (let face in frequencia) {
      porcentagens[face] = (frequencia[face] / numLancamentos) * 100;
    }
    return porcentagens;
  }