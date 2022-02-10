import pokemonApi from "../api/pokemonApi";

const getPokemons = () => {
    const pokemons = Array.from(Array(650));
    return pokemons.map((_, index) => {
        return index + 1;
    });
};

const getPokemonOptions =async () => {
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  const pokemons = await  getPokemnosNames(mixedPokemons.splice(0, 4));
    return pokemons
};

const getPokemnosNames = async ([a, b, c, d] = []) => {
    //    const {data} = await pokemonApi.get(`/1`)
    //     console.log(resp)

    const promisesArr = [
        pokemonApi.get(`/${[a]}`),
        pokemonApi.get(`/${[b]}`),
        pokemonApi.get(`/${[c]}`),
        pokemonApi.get(`/${[d]}`),
    ];

    const [p1, p2, p3, p4] = await Promise.all(promisesArr);
    return [
        {name:p1.data.name, id:p1.data.id},
        {name:p2.data.name, id:p2.data.id},
        {name:p3.data.name, id:p3.data.id},
        {name:p4.data.name, id:p4.data.id},
    ]
};
export default getPokemonOptions;
