<template>
    <div class="options-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id">
                <button
                    :disabled="disbaleButtons(pokemon.id)"
                    @click="$emit('selection', pokemon.id)"
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
};
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: rgb(3, 3, 216);
    border-radius: 5px;
    border: 2px solid rgb(255, 238, 0);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.411);
    color: rgb(255, 238, 0);
    text-shadow: 0px 2px 5px rgb(3, 3, 216);
    font-family: "Supermercado One", cursive;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
li button {
    background: none;
    width: 100%;
    height: 100%;
    border: none;
    appearance: none;
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>
