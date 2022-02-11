<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                <button
                    :disabled="disabledButtons()"
                    @click="$emit('selection', pokemon.id)"
                    :class="{'btn_disabled' : getStylesOptions(pokemon.id)}"
                >
                    <div v-if="getAnswer(pokemon.id)">
                        <img src="../assets/poke.png" alt="poke" />
                    </div>
                    {{ pokemon.name }}
                     <div v-if="getAnswer(pokemon.id)">
                        <img src="../assets/poke.png" alt="poke" />
                    </div>
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            disabled: false,
        };
    },
    props: {
        pokemons: {
            type: Array,
            required: true,
        },
        pokemonSelected: {
            type: Number,
        },
        pokemonId: {
            type: Number,
        },
    },
    methods: {
        disabledButtons(){
            if(this.pokemonSelected){
                return true;
            }else{
                return false;
            }
        },
        // function para agregarle estilos a los botones no seleccionados
        getStylesOptions(id){
            if(this.pokemonSelected){
                if(this.pokemonSelected === id){
                    return false;
                }else{
                    return true;
                }
            }
        },
        getAnswer(id){
            if(this.pokemonSelected){
                if(this.pokemonId === id){
                    return true;
                }else{
                    return false;
                }
            }
        }
    },
    watch: {
        pokemonId(newId, oldId) {
           disabledButtons()
        },
        
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: rgb(3, 3, 216);
    background-color: rgba(0, 0, 0, 0.411);
    border-radius: 5px;
    border: 2px solid rgb(255, 238, 0);
    cursor: pointer;
    margin-bottom: 10px;
    height: 50px;
    width: 250px;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.26);
}
li button {
    appearance: none;
    background: none;
    border: none;
    color: rgb(255, 238, 0);
    font-family: "Supermercado One", cursive;
    font-size: 16px;
    height: 100%;
    letter-spacing: 2px;
    text-shadow: 0px 2px 5px rgb(3, 3, 216);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
button div{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    margin: 0 10px;
}
.btn_disabled {
    opacity: 0.3;
}

.options-container {
    display: flex;
    justify-content: center;
}
img{
    width: 20px;
    height: 20px;
    display: inline-flex;
}
</style>
