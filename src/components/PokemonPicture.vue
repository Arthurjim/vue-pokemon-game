<template>
    <div class="pokemon-container">
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="pokemon"
            class="hidden-pokemon"
        />
        <!-- <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="pokemon"
            class="fade-in"
        /> -->
    </div>
</template>

<script>
export default {};
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
