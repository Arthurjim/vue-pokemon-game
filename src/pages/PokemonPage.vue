<template>
  <h2>¿Quien es este pókemon?</h2>
    <PokemonPicture :pokemonId="4" :showPokemon='false' />
    <PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
export default {
    name:'PokemonPage',
    components:{
      PokemonOptions,
      PokemonPicture
    }
}
</script>

<style>

</style>