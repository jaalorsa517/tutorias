<script setup>
import PokemonsListVue from "./components/PokemonsList.vue";
</script>

<template>
  <div class="app">
    <PokemonsListVue />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.skeleton {
  animation: skeleton-animation 1.2s linear infinite alternate;
}

@keyframes skeleton-animation {
  0% {
    background-color: hsl(0, 0%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
