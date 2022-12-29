<script setup>
import { computed, watch } from "vue";
import { dic } from "../shared/index.js";

const props = defineProps({
  animal: { type: Object, required: true },
  show: { type: Boolean, default: false },
});
const emit = defineEmits(["showAnimal"]);
const colorHead = computed(() => dic[props.animal.type]);
const btnText = computed(() => (props.show ? "Ocultar" : "Mostrar"));
watch(
  () => props.show,
  (newValue, oldValue) => {
    console.log("Prop show changed from Composition", newValue, oldValue);
  }
);
function showAnimal() {
  emit("showAnimal");
}
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
<style></style>