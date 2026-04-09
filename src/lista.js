const lista = ["um", "dois", "três"];

export function getLista() {
    const listaCopia = structuredClone(lista);
    return listaCopia;
}