function atualizarListaProjetosUI(projetos) {
  const lista = document.getElementById("lista-projetos");
  const select = document.getElementById("projeto-tarefa");
  lista.innerHTML = "";
  select.innerHTML = "";

  projetos.forEach(projeto => {
    const li = document.createElement("li");
    li.textContent = projeto.nome;
    lista.appendChild(li);

    const option = document.createElement("option");
    option.value = projeto.id;
    option.textContent = projeto.nome;
    select.appendChild(option);
  });
}

function atualizarListaTarefasUI(tarefas, projetos) {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  tarefas.forEach(tarefa => {
    const li = document.createElement("li");
    const projeto = projetos.find(p => p.id === tarefa.projetoId);
    li.textContent = `${tarefa.titulo} (${tarefa.prioridade}) - Projeto: ${projeto ? projeto.nome : "N/A"}`;
    lista.appendChild(li);
  });
}
