<template>
  <section class="pokemons">
    <card v-for="pokemon in listPokemons" :key="pokemon.id" :link="pokemon.img" :name="pokemon.name" />
  </section>
</template>

<script>
import axios from "axios";
import loadingPokemon from "@/components/loading.vue";

export default {
  components: {
    card: () => {
      return {
        component: import("@/components/CardPokemon.vue"),
        loading: loadingPokemon,
      };
    },
  },
  data() {
    return {
      listPokemons: [],
    };
  },
  async beforeCreate() {
    const baseURL = "https://pokeapi.co/api/v2";
    const pokemons = await axios.get(baseURL + "/pokemon?limit=151");
    const uris = pokemons.data.results.map((pokemon) => pokemon.url);
    this.listPokemons = [];
    for (let i = 0; i < uris.length; i++) {
      const element = await axios.get(uris[i]);
      const pokemon = {
        id: element.data.id,
        name: element.data.name,
        img: element.data.sprites.other["official-artwork"].front_default,
        types: element.data.types.map((type) => type.type.name),
      };
      this.listPokemons.push(pokemon);
    }
  },
};
</script>

<style>
.pokemons {
  display: flex;
  flex-wrap: wrap;
}
</style>
