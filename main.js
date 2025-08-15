let projetos = carregarDados("projetos");
let tarefas = carregarDados("tarefas");

document.addEventListener("DOMContentLoaded", () => {
  atualizarListaProjetosUI(projetos);
  atualizarListaTarefasUI(tarefas, projetos);

  document.getElementById("form-projeto").addEventListener("submit", e => {
    e.preventDefault();
    const nome = document.getElementById("nome-projeto").value;
    const projeto = criarProjeto(nome);
    projetos.push(projeto);
    salvarDados("projetos", projetos);
    atualizarListaProjetosUI(projetos);
    e.target.reset();
  });

  document.getElementById("form-tarefa").addEventListener("submit", e => {
    e.preventDefault();
    const titulo = document.getElementById("titulo-tarefa").value;
    const data = document.getElementById("data-tarefa").value;
    const prioridade = document.getElementById("prioridade-tarefa").value;
    const projetoId = Number(document.getElementById("projeto-tarefa").value);
    const tarefa = criarTarefa(titulo, data, prioridade, projetoId);
    tarefas.push(tarefa);
    salvarDados("tarefas", tarefas);
    atualizarListaTarefasUI(tarefas, projetos);
    e.target.reset();
  });
});
