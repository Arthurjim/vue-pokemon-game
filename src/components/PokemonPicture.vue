<template>
    <div class="pokemon-container">

        <img
          v-bind:src="imgSrc"
          alt="pokemon"
          class="hidden-pokemon" />
        <img
            v-bind:src="imgSrc"
            v-if="showPokemon"
            alt="pokemon"
            class="fade-in"
        />
    </div>
</template>

<script>
export default {
    name:'PokemonPicture',
    props: {
        pokemonId: {
            type: Number,
            required:true,
        },
        showPokemon:{
            type:Boolean,
            required:true,
            default:false
        }
    },
   
    computed: {
        imgSrc() {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        },
    },
};
</script>

<style scoped>
.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    position: absolute;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>
