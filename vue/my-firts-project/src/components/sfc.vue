<script setup>
import { ref, onMounted, reactive } from "vue";
import animal from "./CardAnimalSfc.vue";
import { useAnimals } from "../store/useAnimals";

const animalref = ref(null);
const title = ref(null);
const animalsStore = useAnimals();

function addAnimal() {
  const animalNew = {
    name: "Pato",
    type: "water",
    text: "Es un animal acuático",
    show: false,
  };
  animalsStore.addAnimal({...animalNew});
  animalsStore.$patch((state) => {
    state.animals.push({...animalNew});
  })
  animalsStore.animals.push({...animalNew});
}

onMounted(() => {
  console.log("MOUNTED SFC", animalref.value[0].$el);
  console.log("MOUNTED SFC", title.value);
});
</script>

<template>
  <div>
    <h1 ref="title">Composition</h1>
    <button @click="addAnimal">Agregar un animal</button>
    <animal
      class="inteOption"
      ref="animalref"
      v-for="(animal, key) in animalsStore.animals"
      :key="key"
      :animal="animal"
      :show="animal.show"
      @showAnimal="animal.show = !animal.show"
    ></animal>
  </div>
</template>
