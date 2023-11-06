<script setup lang="ts">
import { inject, ref } from "vue";
import { Pokemon } from "src/models/pokemon.models";
import { getPokemon } from "src/services/pokemon.service";
import { IHttpServices } from "src/models/http.models";
import { HTTPSERVICE } from "src/models/inject.models";

const emit = defineEmits<{ (e: 'search', payload: Pokemon | undefined): void }>()
const query = ref('')
const httpService: IHttpServices | undefined = inject(HTTPSERVICE)

async function search(q: string) {
  try {
    if (!q) return
    const { name, image, number }: Pokemon = await getPokemon(httpService, q)
    emit('search', {
      name, image, number
    })
  } catch (error: any) {
    console.log({ error: error.message })
    emit('search', undefined)
  }
}
</script>

<template>
  <div class="app__query">
    <input type="text" class="app__input" v-model="query" placeholder="Name or Number" @keydown.enter="search(query)">
    <button class="app__button" @click="search(query)">Search</button>
  </div>
</template>

<style lang="scss">
.app {
  &__query {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  &__button {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    &__query{
      flex-direction: row;
      justify-content: center;
    }
    &__button{
      width: auto;
    }
  }
}
</style>
