import { shallowMount } from "@vue/test-utils";
import PokemonOptions from '@/components/PokemonOptions';
import {pokemonsMock} from '../mocks/pokemons.mock'
describe('Pruebas en Componente', () => {
   
    const wrapper = shallowMount(PokemonOptions,{
        props:{
            pokemons:pokemonsMock
        }
    })
    test('Debe hacer match con el snaptshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
     })

     test('Debe de mostra las 4 ocpciones correctamente', () => { 
        const liTags= wrapper.findAll('li')
        // const isTrue = liTags.map(item=>item.text().length > 0 ? true : false)
        // expect(isTrue.includes(false)).toBe(false)

        expect(liTags[0].text()).toBe('bulbasaur')
        expect(liTags[1].text()).toBe('ivysaur')
        expect(liTags[2].text()).toBe('venusaur')
        expect(liTags[3].text()).toBe('charmander')

      })

      test('Debe de emitir "selection" con sus respectivos parámetros al hacer click', () => { 
        const [p1,p2,p3,p4]= wrapper.findAll('li')
        const buttonA = p1.find('button')
        buttonA.trigger('click')
        expect(wrapper.emitted('selection').length).toBe(1)
          
       })
})