import PokemonPicture from "@/components/PokemonPicture.vue";
import { shallowMount } from "@vue/test-utils";
describe("Pruebas en el componente pokemonPicture", () => {
    test('Debe de hacer match con el snaptchot', () => { 
        const wrapper = shallowMount(PokemonPicture, {
            propsData: {
                pokemonId:1,
                showPokemon:true
                }
            })
        expect(wrapper.html()).toMatchSnapshot()
     })
     test('Debe de mostrar la imagen oculta y el pokemon 100', () => { 

        const wrapper = shallowMount(PokemonPicture, {
            propsData: {
                pokemonId:100,
                showPokemon:false
                }
            })
            console.log(wrapper.html())
            const [img1,img2]=wrapper.findAll('img')
            expect(img1.exists()).toBe(true)
            expect(img2).toBe(undefined)

            expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
            // expect(img1.attributes.src).toBe('https://pokeres.bastionbot.org/images/pokemon/100.png')
            // expect(wrapper.find('.hidden-pokemon').exists()).toBe(false)

            // expect(wrapper.find('.fade-in').exists()).toBe(true)
      })

     test('debe de mostrar el pokemons si showPokemon:true', () => { 

        const wrapper = shallowMount(PokemonPicture, {
            propsData: {
                pokemonId:100,
                showPokemon:true
                }
            })
            const img1=wrapper.find('img')
            expect(img1.exists()).toBe(true)
            expect(img1.classes('fade-in')).toBe(true)
      })
});
