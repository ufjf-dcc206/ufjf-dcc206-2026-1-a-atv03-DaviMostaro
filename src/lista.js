let lista = [];

export function iniciaLista(){
    lista = ["um", "dois", "três"];
}

export function getLista() {
    const listaCopia = structuredClone(lista);
    return listaCopia;
}

export function limpaLista() {
    lista.splice(0);
}

export function adicionaElemento(elemento) {
    lista.push(elemento);
}