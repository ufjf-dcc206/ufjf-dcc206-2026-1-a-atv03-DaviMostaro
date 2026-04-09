import { getLista } from "./lista";

export function setupRootApp(){ 
  const divRoot = document.createElement("div");
  divRoot.append(criaTitulo());
  divRoot.append(criarLista());

  return divRoot;
}

function criaTitulo() {
  const h1 = document.createElement("h1");
  h1.textContent = "App de lista";
  return h1;
}

function criarLista() {
  const div = document.createElement("div");
  
  const btnAtualizar = document.createElement("button");
  btnAtualizar.id = "atualizar";
  btnAtualizar.textContent = "Atualizar";
  div.append(btnAtualizar);

  const ol = document.createElement("ol");
  ol.id = "lista";
  div.append(ol);

  return div;
}

export function setupEvents(root) {
  const btnAtualizar = root.querySelector("#atualizar");
  const ol = root.querySelector("#lista");
  btnAtualizar.addEventListener("click", () => {
    const lista = getLista();
    ol.innerHTML = "";
    for (const item of lista) {
      const li = document.createElement("li");
      li.textContent = item;
      ol.append(li);
    }
  });
}