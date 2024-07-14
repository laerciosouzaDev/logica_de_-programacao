function verificarVicio(porcentagens) {
    for (let face in porcentagens) {
      if (porcentagens[face] > 22) {
        return true;
      }
    }
    return false;
  }