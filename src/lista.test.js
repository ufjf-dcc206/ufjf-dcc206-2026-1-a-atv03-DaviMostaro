import { expect, it } from "vitest";
import { adicionaElemento, getLista, iniciaLista, limpaLista } from "./lista";

it("deve ter elementos iniciais", () => {
    iniciaLista();
    const lista = getLista();

    expect(lista).toHaveLength(3);   
});

it("alterar a lista retornada não deve afetar a original", () => {
    iniciaLista();
    const lista = getLista();
    expect(lista).toHaveLength(3);

    lista.splice(0, 1);
    const lista2 = getLista();
    expect(lista2).toHaveLength(3);
});

it("lista deve ter 0 elementos após limpeza", () => {
    iniciaLista();
    const lista = getLista();
    expect(lista).toHaveLength(3);

    limpaLista();
    const lista2 = getLista();
    expect(lista2).toHaveLength(0);
});


it("deve adicionar um elemento à lista", () => {
    iniciaLista();
    const lista = getLista();
    expect(lista).toHaveLength(3);

    adicionaElemento("quatro");
    const lista2 = getLista();
    expect(lista2).toHaveLength(4);
});

