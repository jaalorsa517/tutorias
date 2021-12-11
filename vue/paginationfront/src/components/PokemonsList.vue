<script setup>
import { onBeforeMount, ref } from "vue";
import cardPokemon from "./Card.vue";

const uri = "https://pokeapi.co/api/v2/pokemon/";
let pokemons = ref(Array.from({ length: 20 }, (v, i) => ({ name: "", img: "" })));

async function fetchPokemons() {
  const response = await fetch(uri);
  const pokemonsRaw = await response.json();
  return await Promise.all(
    pokemonsRaw.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const pokemonRaw = await response.json();
      return {
        name: pokemonRaw.name,
        img: pokemonRaw.sprites.other["official-artwork"].front_default,
        type: pokemonRaw.types[0].type.name,
      };
    })
  );
}

onBeforeMount(async () => {
  pokemons.value = await fetchPokemons();
});
</script>

<template>
  <h2 class="app__title">Los pokemons</h2>
  <div class="app__view">
    <cardPokemon v-for="pokemon in pokemons" :key="pokemon.name" :info="pokemon" />
  </div>
</template>

<style>
.app__view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.app__title {
  margin: 10px 0;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
}
</style>
