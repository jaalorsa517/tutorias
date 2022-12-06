<script>
import CardAnimal from "./CardAnimalOption.vue";
import { animalsArr } from "../shared";

const _animalsRef = JSON.stringify(animalsArr);

export default {
  components: { animal: CardAnimal },
  data: () => ({
    animals: JSON.parse(_animalsRef),
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
