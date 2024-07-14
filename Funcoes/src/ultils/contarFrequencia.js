function contarFrequencia(lancamentos) {
    let frequencia = {};
    for (let i = 1; i <= 6; i++) {
      frequencia[i] = 0;
    }
    lancamentos.forEach(face => {
      frequencia[face]++;
    });
    return frequencia;
  }