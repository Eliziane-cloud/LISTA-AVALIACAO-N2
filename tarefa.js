function criarTarefa(titulo, data, prioridade, projetoId) {
  return {
    id: Date.now(),
    titulo,
    data,
    prioridade,
    projetoId,
    concluida: false
  };
}
