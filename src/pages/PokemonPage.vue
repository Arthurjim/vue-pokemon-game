<template>
    <h1 v-if="!pokemon">Buscando pókemon...</h1>
   <div v-else>
      <h2>¿Quien es este pókemon?</h2>
     <PokemonPicture
        :show-pokemon="showPokemon"
        :pokemon-id="pokemon.id" />
      <PokemonOptions
        :pokemons="pokemonsArr"
        @selection="checkAnswer" />
      
      <template v-if="showAnswer" >
          <h2>{{message}}</h2>
          <button @click="newGame">Nuevo Juego</button>
      </template>

   </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions.js";

export default {
    name: "PokemonPage",
    data() {
        return {
            pokemonsArr: [],
            pokemon: null,
            showPokemon:false,
            showAnswer:false,
            message:''
        };
    },
    components: {
        PokemonOptions,
        PokemonPicture,
    },
    methods: {
        async mixmethod() {
            this.pokemonsArr = await getPokemonOptions();
            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonsArr[rndInt]
        },
        checkAnswer(id){
          // console.log(numero)
          if( this.pokemon.id == id){
            this.showPokemon = true
            this.message = `Correcto, ${this.pokemon.name}`
            this.showAnswer = true
          }else{
            this.message = `Oops, era ${this.pokemon.name}`
            this.showPokemon = true
            this.showAnswer = true

          }
        },
        newGame(){
        this.showAnswer = false;
        this.showPokemon=false;
        this.pokemon=null;
        this.pokemonsArr =[]

        this.mixmethod();
        }
    },
    mounted() {
        this.mixmethod();
    },
    // onMo:{
    //     '$poks':{
    //       async handler(){
    //         this.pokemons = await getPokemonOptions();
    //         console.log(this.pokemons)
    //       },
    //       immediate: true
    //     }
    // }
};
</script>

<style></style>
