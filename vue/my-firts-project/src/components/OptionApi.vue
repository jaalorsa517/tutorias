<script>
import CardAnimal from "./CardAnimalOption.vue";
import {useAnimals} from "../store/useAnimals"


export default {
  components: { animal: CardAnimal },
  data: () => ({
    animalsStore: useAnimals()
  }),
  mounted() {
    console.log("MOUNTED", this.$refs.animalref[0].$el);
    console.log("MOUNTED", this.$refs.title);
  },
};
</script>
<template>
  <div>
    <h1 ref="title">OPTION API</h1>
    <ul>
    <li v-for="(animalName, key) in animalsStore.nameAnimals" :key="key" tag>
    {{animalName}}
    </li>
    </ul>
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
