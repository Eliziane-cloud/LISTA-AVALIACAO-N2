function filtrarPorProjeto(tarefas, projetoId) {
  return tarefas.filter(t => t.projetoId === projetoId);
}
