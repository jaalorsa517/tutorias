<script>
import { dic } from "../shared/index.js";

export default {
  name: "CardAnimals",
  props: {
    animal: { type: Object, required: true },
    show: { type: Boolean, default: false },
  },
  data: () => ({
    dic,
  }),
  computed: {
    colorHead() {
      return this.dic[this.animal.type];
    },
    btnText() {
      return this.show ? "Ocultar" : "Mostrar";
    },
  },
  watch: {
    show(newValue, oldValue) {
      console.log("Prop show changed from Option", newValue, oldValue);
    },
  },
  methods: {
    showAnimal() {
      this.$emit("showAnimal", this.animal);
    },
  },
};
</script>
<template>
  <section class="cardAnimals">
    <div class="cardAnimals__container">
      <h2 :class="['cardAnimals__title', colorHead || '']">{{ animal.name }}</h2>
      <p class="cardAnimals__text" v-if="show">{{ animal.text }}</p>
      <div class="cardAnimals__containerButton">
        <button class="cardAnimals__button" @click="showAnimal">{{ btnText }}</button>
      </div>
    </div>
  </section>
</template>
