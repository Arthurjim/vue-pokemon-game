import pokemonApi from '@/api/pokemonApi'
describe('pokemonApi', () => { 
    test('Axios debe de estar onfigurado con la api de pokemon',()=>{
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
 })