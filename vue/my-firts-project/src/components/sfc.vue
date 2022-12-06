<script setup>
import { ref, onMounted, reactive } from "vue";
import animal from "./CardAnimalSfc.vue";
import { animalsArr } from "../shared";

const animalref = ref(null);
const title = ref(null);
const _animalsRef = JSON.stringify(animalsArr);
const animals = reactive(JSON.parse(_animalsRef));

onMounted(() => {
  console.log("MOUNTED SFC", animalref.value[0].$el);
  console.log("MOUNTED SFC", title.value);
});
</script>

<template>
  <div>
    <h1 ref="title">Composition</h1>
    <animal
      class="inteOption"
      ref="animalref"
      v-for="(animal, key) in animals"
      :key="key"
      :animal="animal"
      :show="animal.show"
      @showAnimal="animal.show = !animal.show"
    ></animal>
  </div>
</template>
