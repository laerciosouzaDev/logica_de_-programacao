function gerarLancamentos(numLancamentos) {
    let lancamentos = [];
    for (let i = 0; i < numLancamentos; i++) {
      lancamentos.push(Math.floor(Math.random() * 6) + 1);
    }
    return lancamentos;
  }