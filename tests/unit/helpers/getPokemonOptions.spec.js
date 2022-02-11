import getPokemonOptions, {
    getPokemons,
    getPokemnosNames,
} from "../../../src/helpers/getPokemonOptions";

describe("Pruebas en getPokemonOptions", () => {
    test("Debe de regresar un arreglo de numeros", () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650);
    });

    test("Debe de retornar un arreglo de 4 elementoscon nombre de pokemons", async () => {
        const firstPokemons = [
            { name: "bulbasaur", id: 1 },
            { name: "ivysaur", id: 2 },
            { name: "venusaur", id: 3 },
            { name: "charmander", id: 4 },
        ];
        const pokemonss = await getPokemnosNames([1, 2, 3, 4]);
        console.log(pokemonss)
        expect(pokemonss).toEqual(firstPokemons);
    });
    test("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
        const pokemons = await getPokemonOptions();

        expect(pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
            {
                name: expect.any(String),
                id: expect.any(Number),
            },
        ]);
    });
});
