<script setup lang='ts'>
import { ref } from 'vue';
import InputSearch from 'src/components/InputSearch.vue';
import PokemonCompont from "src/components/Pokemon.vue"

const pokemon = ref()

</script>
<template>
  <section class="app">
    <h2>Find a Pokemon</h2>
    <InputSearch @search="pokemon = $event" />
    <PokemonCompont :pokemon="pokemon" />
  </section>
</template>
<style lang="scss">

</style>