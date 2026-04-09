import { expect, it } from "vitest";
import { getLista } from "./lista";

it("deve ter elementos iniciais", () => {
    const lista = getLista();

    expect(lista).toHaveLength(3);   
});

it("alterar a lista retornada não deve afetar a original", () => {
    const lista = getLista();
    expect(lista).toHaveLength(3);

    lista.splice(0, 1);
    const lista2 = getLista();
    expect(lista2).toHaveLength(3);
});