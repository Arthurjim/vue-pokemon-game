<template>
    <h1 v-if="!pokemon">Buscando pókemon...</h1>
    <div v-else>
        <h2 class="title">¿Quién es ese pókemon?</h2>
        <PokemonPicture :show-pokemon="showPokemon" :pokemon-id="pokemon.id" />
        <PokemonOptions
            :pokemons="pokemonsArr"
            :pokemon-id="pokemon.id"
            :pokemon-selected="pokemonSelected"
            @selection="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="message">{{ message }}</h2>
            <button class="btn_again" @click="newGame">Nuevo Juego</button>
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
            showPokemon: false,
            showAnswer: false,
            message: "",
            pokemonSelected:null
        };
    },
    components: {
        PokemonOptions,
        PokemonPicture,
    },
    methods: {
        async mixmethod() {
            this.pokemonsArr = await getPokemonOptions();
            const rndInt = Math.floor(Math.random() * 4);
            this.pokemon = this.pokemonsArr[rndInt];
        },
        checkAnswer(id) {
            // console.log(numero)
            
            if (this.pokemon.id == id) {
                this.showPokemon = true;
                this.message = `Correcto, ${this.pokemon.name}`;
                this.showAnswer = true;

            } else {
                this.message = `Oops, era ${this.pokemon.name}`;
                this.showPokemon = true;
                this.showAnswer = true;
            }
            this.pokemonSelected=id;

            console.log('hola')
        },
        newGame() {
            this.showAnswer = false;
            this.showPokemon = false;
            this.pokemon = null;
            this.pokemonsArr = [];
            this.correctPokemon = [];
            this.mixmethod();
            this.pokemonSelected=null;

        },
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

<style scoped>
    template{
        background: blue;
    }
    .title {
        color: rgb(255, 238, 0);
        text-shadow: 0px 2px 5px rgb(3, 3, 216);
        font-size: 40px;
        font-family: "Supermercado One", cursive;
        letter-spacing: 2px;
    }
.message{
    background: rgba(255, 238, 0, 0.527);;
    border-radius: 5px;
    color: rgb(15, 15, 15);
    font-family: "Supermercado One", cursive;
    font-size: 30px;
    margin: auto;
    padding: 25px;
    text-align: center;
    width: 300px;

}
.btn_again{
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    background: red;
    margin-top: 10px;
    font-family: "Supermercado One", cursive;
    border: none;
}
.btn_again:hover{
    background: #ff1919c4;

}
</style>
