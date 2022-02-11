import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from '@/pages/PokemonPage'
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
});
