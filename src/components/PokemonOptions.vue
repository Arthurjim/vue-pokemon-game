<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                <button
                    :disabled="disbaleButtons(pokemon.id)"
                    @click="$emit('selection', pokemon.id)"
                    :class="{'btn_disabled' : disbaleButtons(pokemon.id)}"
                >
                    {{ pokemon.name }}
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
    props: {
        pokemons: {
            type: Array,
            required: true,
        },
        pokemonId: {
            type: Number,
            required: true,
        },
    },
    methods: {
        disbaleButtons(id) {
            if (this.pokemonId > 0) {
                if (id !== this.pokemonId) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        },
    },
    watch:{
        pokemons(newArr, oldArr){
            this.disbaleButtons()
        }
    }
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
    padding: 10px;
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
}
.btn_disabled{
    opacity: .3;

}

.options-container {
    display: flex;
    justify-content: center;
}
</style>
