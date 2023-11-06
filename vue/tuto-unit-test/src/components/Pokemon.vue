<script setup lang="ts">
import { PropType } from 'vue';
import { Pokemon } from 'src/models/pokemon.models';

const props = defineProps({
  pokemon: { type: Object as PropType<Pokemon> }
})

</script>

<template>
  <div class="app__result" v-if="Boolean(props.pokemon)">
    <div class="app__info">
      <p class="app__id">{{ props.pokemon?.number }}</p>
      <p class="app__name">{{ props.pokemon?.name }}</p>
    </div>
    <div class="app__image">
      <img :src="props.pokemon?.image" :alt="props.pokemon?.name">
    </div>
  </div>
  <div class="app__result" v-else>
    <h4>There is no Pokemon to show</h4>
  </div>
</template>

<style lang="scss">
.app {
  &__result {
    margin: 1em auto;
  }

  &__info {
    display: flex;
    justify-content: center;
    gap: 0.5em;
    font-weight: 700;

    p {
      margin: 0;
    }
  }

  &__id {
    &::before {
      content: "#";
    }
  }

  &__name {
    text-transform: capitalize;
  }

  &__image {

    img {
      width: 100%;
      height: auto;
    }
  }
}</style>
