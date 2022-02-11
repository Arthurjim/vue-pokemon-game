import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'


import { pokemonsMock } from "../mocks/pokemons.mock";
describe("Pokemon pages", () => {
    let wrapper;
    // let mixPokemonArray;
    beforeEach(() => {
        // mixPokemonArray=  jest.spyOn(PokemonPage.methods, 'mixmethod')

        wrapper = shallowMount(<PokemonPage />)
    });

    test("Debe de hacer match con el snaptchott", () => {
        expect(wrapper.html()).toMatchSnapshot()
    });
    test('Debe de llamar mixPokemonArray al montar', () => { 
        const mixPokemonArray= jest.spyOn(PokemonPage.methods, 'mixmethod')
        shallowMount(PokemonPage) 
        expect(mixPokemonArray).toHaveBeenCalled()
     })

     test('debe de hacer match con el snapshor cuando cargan los elemenos', () => { 
         const wrapper = mount(PokemonPage,{
             data(){
                return {
                    pokemonsArr: pokemonsMock,
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: "",
                    pokemonSelected:null
                };
             }
         })

         expect(wrapper.html()).toMatchSnapshot()
      })
      test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage,{
            data(){
               return {
                   pokemonsArr: pokemonsMock,
                   pokemon: pokemonsMock[0],
                   showPokemon: false,
                   showAnswer: false,
                   message: "",
                   pokemonSelected:null
               };
            }
        })
        expect(wrapper.html()).toMatchSnapshot()

        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOptions =wrapper.find('pokemon-options-stub')
        
       expect(pokemonPicture.exists()).toBeTruthy()
       expect(pokemonOptions.exists()).toBeTruthy()

       expect(pokemonPicture.attributes('pokemonid')).toBe('1')
       expect(pokemonOptions.exists('pokemons')).toBe(true)


        // expect(wrapper.findComponent(PokemonPicture).exists()).toBe(true);
        // expect(wrapper.find('PokemonOptions').exists()).toBe(true);

        // console.log(wrapper.element())
        // PokemonPicture
        // PokemonPicture

        // PokemonPicture pokemonId = 5
      })
});
